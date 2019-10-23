import React from 'react';
import styled from 'styled-components';

import Questions from 'components/Questions';

import { Box, Container, Heading, Paragraph, Screen, Text, utils } from 'styled-minimal';

const Header = styled.div`
  margin-bottom: ${utils.spacer(3)};
`;

const Quiz = () => (
  <Screen key="Quiz" data-testid="QuizWrapper">
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
      <Questions/>
    </Container>
  </Screen>
);

export default Quiz;
