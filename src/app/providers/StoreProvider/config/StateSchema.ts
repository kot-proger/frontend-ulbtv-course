import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';

export interface StateScema {
  counter: CounterSchema;
  user: UserSchema;
}
