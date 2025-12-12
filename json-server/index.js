/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const jsonServer = require('json-server');
// const jwt = require('jsonwebtoken');
const path = require('path');
const cors = require('cors');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(cors());
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 800);
  });
  next();
});

server.post('/auth', (req, res) => {
  const { username, password } = req.body;
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'));
  const { users } = db;
  const userFromBd = users.find((user) => user.username === username && user.password === password);

  if (userFromBd) {
    return res.json(userFromBd);
  }

  return res.status(403).json({ message: 'user not found' });
});

server.use(jsonServer.defaults());
server.use(router);

// eslint-disable-next-line consistent-return
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }

  next();
});

// Add custom middleware for CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

server.listen(8000, () => console.log('server is running on 8000 port'));
