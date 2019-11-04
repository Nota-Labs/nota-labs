import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Button from 'react-bootstrap/Button';
import FormCheck from 'react-bootstrap/FormCheck';
// import FormControl from 'react-bootstrap/FormControl';
import styled from 'styled-components';

const ButtonCustom = styled.div`
  text-align: right;
  button {
    background: black;
    font-size: 1.5em;
    padding: 0.4em 1.4em;
    border-radius: 0.4em;
    border-color: transparent;
    &:hover,
    &:active,
    &:focus {
      background-color: #53dbb5!important;
      border-color: transparent!important;
      box-shadow: 0 0 1em 0.2rem rgba(0,0,0,.10)!important;
    }
  }
`;

const RadioInputCustom = styled.div`
  margin-bottom: 2em;
  > div {
    padding-left: 0;
  }
  label {
    width: 100%;
    &:hover {
      cursor: pointer;
      background: #f5f5f5;
    }
    &::before{
      content: '';
      display: block;
      width: 2em;
      height: 2em;
      position: absolute;
      top: 50%;
      margin-top: -1em;
      margin-left: -4em;
      border-radius: 2em;
      background-color: transparent;
      border: 2px solid #53dbb5;
    }
    background: white;
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: 2em 3em 2em 6em;
      p {
        font-weight: 300;
        font-size: 1em;
        margin-bottom: 0;
      }
      strong {
        font-weight: 600;
        font-size: 1.5em;
      }
    }
  }
  input[type="radio"]:checked+label {
    border-color: #ddd;
    &::before{
      background-color: #53dbb5;
   }
  }
  input[type="radio"] {
    opacity: 0;
  }
`;

const RadioField = ({ input, meta, label, step, id, ...props }) => (
  <RadioInputCustom>
    <FormCheck
      id={`input${id}`}
      name={`step${step}`}
      label={label}
      type="radio"
      {...input}
      {...props}
    />
  </RadioInputCustom>
);

// const FieldInput = ({ input, meta, id, type, placeholder, label, ...props }) => (
//   <FormControl
//     id={`input${id}`}
//     type={type}
//     placeholder={placeholder}
//     label={label}
//     {...input}
//     {...props}
//   />
// );

const QuizForm = props => {
  const { handleSubmit, submitting, currentQuestion, currentStep } = props;

  return (
    <form onSubmit={handleSubmit} data-testid="QuizForm">
      <h2>{currentQuestion.question}</h2>

      {currentQuestion.answers.map((answer, index) => (
        <Field
          id={index}
          name="answer"
          component={RadioField}
          step={currentStep}
          props={{ value: index }}
          key={`option_${index}`}
          label={
            <span>
              <strong>{answer.title}</strong>
              <p>{answer.label}</p>
            </span>
          }
        />
      ))}

      {/* <Field
        id={4}
        name={`text1`}
        component={FieldInput}
        type="text"
        placeholder="Placeholder"
        step={1}
        props={{ value: 'Value test' }}
      /> */}
      <ButtonCustom>
        <Button type="submit" disabled={submitting}>
          Next
        </Button>
      </ButtonCustom>
    </form>
  );
};

export default reduxForm({
  form: 'Quiz', // a unique identifier for this form
  // validate
})(QuizForm);
