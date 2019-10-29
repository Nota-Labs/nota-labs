import user from './user';
import quiz from './quiz';
import { reducer as formReducer } from 'redux-form';

export default {
  ...user,
  ...quiz,
  form: formReducer,
};
