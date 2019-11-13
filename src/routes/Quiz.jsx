import React from 'react';

import Questions from 'components/Questions';
import Logo from 'components/NotaLogo';

const QuizContainer = () => (
  <div className="container">
    <Logo />
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <Questions />
      </div>
    </div>
  </div>
);

export default QuizContainer;
