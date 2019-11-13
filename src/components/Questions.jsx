import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addAnswer } from '../actions';
import QuestionsForm from './QuestionsForm';
import Report from './Report';

const QuestionsContainer = styled.div`
  padding: 80px;
`;

const Questions = ({ handleSubmit, currentQuestion, currentStep, hasFinished }) => (
  <QuestionsContainer>
    {hasFinished ? (
      <Report />
    ) : (
      <QuestionsForm
        onSubmit={handleSubmit}
        currentQuestion={currentQuestion}
        currentStep={currentStep}
      />
    )}
  </QuestionsContainer>
);

const mapStateToProps = state => ({
  currentQuestion: state.quiz.questions[state.quiz.answers.length],
  currentStep: state.quiz.answers.length, // Or quiz.currentStep
  hasFinished: state.quiz.answers.length == 5, // Or quiz.currentStep
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmit: values => {
    dispatch(addAnswer(values.answer));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Questions);
