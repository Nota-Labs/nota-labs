import app from './app';
import github from './github';
import user from './user';
import quiz from './quiz';
import { reducer as formReducer } from 'redux-form';

export default {
  ...app,
  ...github,
  ...user,
  ...quiz,
  form: formReducer,
};
