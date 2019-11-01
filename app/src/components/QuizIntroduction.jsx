import React from 'react';
import { Link } from 'react-router-dom';

const QuizIntroduction = () => (
  <div className="container-fluid" id="bottom">
    <div className="container">
      <div className="row section">
        <div className="col-md-8 offset-md-2">
          <h2 className="section_header yellow-block">Should you be working with us?</h2>
          <h3>
            We help companies align their products and processes to the needs of their users. This
            short quiz will help determine your maturity in the areas of:
          </h3>
          <span style={{ fontWeight: '400' }}>
            <ul>
              <li className="disc">
                <span style={{ fontWeight: '400' }}>User-needs research</span>
              </li>
              <li className="disc">
                <span style={{ fontWeight: '400' }}>Psychology in design</span>
              </li>
              <li className="disc">
                <span style={{ fontWeight: '400' }}>Prototyping</span>
              </li>
              <li className="disc">
                <span style={{ fontWeight: '400' }}>Product vision</span>
              </li>
              <li className="disc">
                <span style={{ fontWeight: '400' }}>Quality control of design assets</span>
              </li>
            </ul>
          </span>
          <br />
          <Link to="/quiz">
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block"
              data-testid="StartQuiz"
            >
              Start Quiz
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default QuizIntroduction;
