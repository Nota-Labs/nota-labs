import React from 'react';
import { connect } from 'react-redux';
import { start } from '../actions';
import styled from 'styled-components';
import FullListOfServices from './FullListOfServices';

const Description = styled.div`
  background-color: #fffeec;
  border: 2px solid #f8e71c;
  padding: 20px 30px 0px 30px;
  margin-bottom: 30px;
  border-radius: 10px;
`;

const Stronger = styled.span`
  font-weight: 800;
`;

const SuccessReport = () => (
  <div>
    <Description>
      <h3>Good job!</h3>
      <p>It sounds like your product and process are pretty user-centric!</p>
      <p>There may be areas where we can help you fine-tune what you're currently doing.</p>
    </Description>
    <h3>
      We tend to support clients in the following areas. It sounds like you're already in good shape
      with these, however If you'd like to talk further, please get in touch.
    </h3>
    <ul>
      <li>
        <p>
          <Stronger>Experience mapping.</Stronger> We'll create a map of your users needs,
          highlighting which are met and (crucially) unmet by the marketplace. We'll identify which
          needs are 'hygiene' and which are 'differentiators'. We'll help you use this as a more
          predictable and systematic basis for product development. We'll take the best bits of
          Jobs-To-Be-Done and Experience Mapping approaches.
        </p>
      </li>
      <li>
        <p>
          <Stronger>Users mental models and decision-making.</Stronger> We'll help you learn how
          your users expect a service like yours to work, and what their decision-making criteria is
          when using and choosing services like yours. This allows you to base your product designs
          on how users think and behave. More intuitive journeys, less costly usability issues.
        </p>
      </li>
      <li>
        <p>
          <Stronger>Prototyping.</Stronger> You need to be able to prototype and test quickly and
          often. We'll help you establish your workflow for this, or how to use us as an extension
          of your team.
        </p>
      </li>
      <li>
        <p>
          <Stronger>Product vision.</Stronger> We'll help you set a more tangible vision. We'll
          establish which unmet user needs the product solves, and find memorable ways of bringing
          this vision to life - such as a credible prototype that you can share with the team,
          stakeholders, investors.
        </p>
      </li>
      <li>
        <p>
          <Stronger>Design system.</Stronger> We'll help you on the path to establishing a mature
          design system, as a central resource for building consistent, usable, on-brand digital
          journeys.
        </p>
      </li>
    </ul>
  </div>
);

const TailoredReport = ({ answers }) => {
  const answeredNoCount = answers.filter(answer => answer === '0').length;

  const description =
    answeredNoCount > 3 ? (
      <div>
        <h3>Time to embrace user-centred-design!</h3>
        <p>
          There's lots of opportunity to align your product and process to serving the needs of your
          users (and claiming your market share).
        </p>
        <p>We can definitely help.</p>
      </div>
    ) : (
      <div>
        <h3>A good start!</h3>
        <p>
          With a helping hand you can properly align your product and process to the needs of your
          users (and claim your market share).
        </p>
        <p>We can help you make this step up.</p>
      </div>
    );

  return (
    <div>
      <Description>{description}</Description>
      <h3>Based on your answers, we feel we can help you with:</h3>
      <ul>
        {answers[0] !== '2' && (
          <li>
            <p>
              <Stronger>Experience mapping.</Stronger> We'll create a map of your users needs,
              highlighting which are met and (crucially) unmet by the marketplace. We'll identify
              which needs are 'hygiene' and which are 'differentiators'. We'll help you use this as
              a more predictable and systematic basis for product development. We'll take the best
              bits of Jobs-To-Be-Done and Experience Mapping approaches.
            </p>
          </li>
        )}
        {answers[1] !== '2' && (
          <li>
            <p>
              <Stronger>Users mental models and decision-making.</Stronger> We'll help you learn how
              your users expect a service like yours to work, and what their decision-making
              criteria is when using and choosing services like yours. This allows you to base your
              product designs on how users think and behave. More intuitive journeys, less costly
              usability issues.
            </p>
          </li>
        )}
        {answers[2] !== '2' && (
          <li>
            <p>
              <Stronger>Prototyping.</Stronger> You need to be able to prototype and test quickly
              and often. We'll help you establish your workflow for this, or how to use us as an
              extension of your team.
            </p>
          </li>
        )}
        {answers[3] !== '2' && (
          <li>
            <p>
              <Stronger>Product vision.</Stronger> We'll help you set a more tangible vision. We'll
              establish which unmet user needs the product solves, and find memorable ways of
              bringing this vision to life - such as a credible prototype that you can share with
              the team, stakeholders, investors.
            </p>
          </li>
        )}
        {answers[4] !== '2' && (
          <li>
            <p>
              <Stronger>Design system.</Stronger> We'll help you on the path to establishing a
              mature design system, as a central resource for building consistent, usable, on-brand
              digital journeys.
            </p>
          </li>
        )}
      </ul>
    </div>
  );
};

const Report = ({ startQuiz, answers }) => {
  const answeredYesCount = answers.filter(answer => answer === '2').length;

  return (
    <div>
      <h2>Here's your report</h2>
      {answeredYesCount >= 4 ? <SuccessReport /> : <TailoredReport answers={answers} />}
      <button
        type="button"
        className="btn btn-primary btn-lg btn-block"
        onClick={() => startQuiz()}
      >
        Restart
      </button>
      <hr />
      <h3>Discuss this with us now?</h3>
      <p>
        <a href="mailto:hello@notalabs.co.uk">hello@notalabs.co.uk</a>{' '}
        <a href="tel:08001448810">0800 144 88 10</a>
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  answers: state.quiz.answers,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  startQuiz: values => {
    window.scrollTo(0, 0);
    dispatch(start());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Report);
