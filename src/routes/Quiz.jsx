import React from 'react';

import Questions from 'components/Questions';
import FooterBar from 'components/FooterBar';
import Logo from 'components/NotaLogo';

const QuizContainer = () => (
  <div>
    <Logo />
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <Questions />
        </div>
      </div>
    </div>
    <FooterBar />
  </div>
);

export default QuizContainer;
