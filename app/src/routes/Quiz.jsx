import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { start } from '../actions'

import Questions from 'components/Questions';

import { Box, Container, Heading, Paragraph, Screen, Text, utils } from 'styled-minimal';

const Header = styled.div`
  margin-bottom: ${utils.spacer(3)};
`;

const Introduction = ({ startQuiz }) => {
  console.log('SQ', startQuiz)
  return ( 
  <Container verticalPadding>
    <Header>
      <Heading>Should you be working with us?</Heading>
    </Header>
    <Box textAlign="left" mb={4}>
      <Paragraph>
          We help companies align their products and processes to the needs of their users. This short quiz will help determine your maturity in the areas of:
      </Paragraph>
      <ul>
        <li>User-needs research</li>
        <li>Psychology in design</li>
        <li>Prototyping</li>
        <li>Product vision</li>
        <li>Quality control of design assets</li>
      </ul>
    </Box>
    <button onClick={ () => startQuiz() }>Start Quiz</button>
  </Container>
)}

const QuizContainer = ({ hasStarted, startQuiz }) => (
  <Screen key="Quiz" data-testid="QuizWrapper">
    { !hasStarted ? <Introduction startQuiz={startQuiz}/> : <Questions />}
  </Screen>
);

const mapStateToProps = (state) => {
  return {
    hasStarted: state.quiz.currentStep !== -1,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  startQuiz: values => {
    dispatch(start());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizContainer);
