import React from 'react';
import { connect } from 'react-redux';
import { addAnswer } from '../actions'
import QuestionsForm from './QuestionsForm';

const QuestionsContainer = props => {
  return (
    <QuestionsForm
      onSubmit={props.handleSubmit}
      currentQuestion={props.currentQuestion}
      currentStep={props.currentStep}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    currentQuestion: state.quiz.questions[state.quiz.answers.length],
    currentStep: state.quiz.answers.length, // Or quiz.currentStep
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmit: values => {
    // ownProps.history.push('/confirm');
    dispatch(addAnswer(values.answer));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsContainer);
