import { all, fork } from 'redux-saga/effects';

import user from './user';
import quiz from './quiz';

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(user), fork(quiz)]);
}
