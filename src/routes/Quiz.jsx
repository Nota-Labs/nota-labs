import React from 'react';

import Questions from 'components/Questions';

const QuizContainer = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <Questions />
      </div>
    </div>
  </div>
);

export default QuizContainer;
