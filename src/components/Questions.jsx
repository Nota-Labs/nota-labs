import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { addAnswer, start } from '../actions';
import QuestionsForm from './QuestionsForm';
import Report from './Report';

const QuestionsContainer = styled.div`
  padding: 0 80px 80px;
`;

class Questions extends React.Component {
  static propTypes = {
    currentQuestion: PropTypes.number,
    currentStep: PropTypes.number,
    handleSubmit: PropTypes.func.isRequired,
    hasFinished: PropTypes.bool,
    startQuiz: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { startQuiz } = this.props;
    startQuiz();
  }

  render() {
    return <QuestionsWrapper {...this.props} />;
  }
}

const QuestionsWrapper = ({ handleSubmit, currentQuestion, currentStep, hasFinished }) => (
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
  startQuiz: () => {
    dispatch(start());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Questions);
