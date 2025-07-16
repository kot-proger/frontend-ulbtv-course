import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (story: () => {}) => {
  return <BrowserRouter>{story()}</BrowserRouter>;
};
