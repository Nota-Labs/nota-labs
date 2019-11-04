/**
 * @module Sagas/Quiz
 * @desc Quiz
 */

import { all, delay, put, takeLatest } from 'redux-saga/effects';

import { ActionTypes } from 'constants/index';

/**
 * Login
 */
export function* addAnswer() {
  try {
    yield delay(400);
    console.log('Quiz Saga')
    // yield put({
    //   type: ActionTypes.QUIZ_ADD_ANSWER_SUCCESS,
    // });
  } catch (err) {
    /* istanbul ignore next */
    // yield put({
    //   type: ActionTypes.QUIZ_ADD_ANSWER,
    //   payload: err,
    // });
  }
}

/**
 * User Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.QUIZ_ADD_ANSWER, addAnswer)
  ]);
}
