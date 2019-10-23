// @flow
/**
 * @module Actions/Quiz
 * @desc Quiz Actions
 */
import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

export const { quizRemoveLatestAnswer: removeLatestAnswer, quizRemoveAnswer: removeAnswer, quizAddAnswer: addAnswer } = createActions({
    [ActionTypes.QUIZ_REMOVE_LATEST_ANSWER]: () => ({}),
    [ActionTypes.QUIZ_REMOVE_ANSWER]: () => ({}),
    [ActionTypes.QUIZ_ADD_ANSWER]: (answer: string) => ({ answer }),
});