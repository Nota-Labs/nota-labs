import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Button from 'react-bootstrap/Button';
import FormCheck from 'react-bootstrap/FormCheck';
// import FormControl from 'react-bootstrap/FormControl';
import styled from 'styled-components';

const RadioInputCustom = styled.div`
  padding-left: 2em;
  margin-bottom: 1em;
  label {
    &:hover {
      cursor: pointer;
      background: #f5f5f5;
    }
    &::before{
      content: '';
      display: block;
      width: 1.4em;
      height: 1.4em;
      position: absolute;
      top: 50%;
      margin-top: -0.7em;
      margin-left: -3.15em;
      border-radius: 1.4em;
      background-color: transparent;
      border: 2px solid #53dbb5;
    }
    background: white;
    border-radius: 5px;
    border: 1px solid transparent;
    margin-left: -3em;
    padding: 1.5em 2em 1.5em 5em;
      p {
        font-weight: 300;
        font-size: 1em;
        margin-bottom: 0;
      }
      strong {
        font-weight: 400;
        font-size: 1.5em;
      }
    }
  }
  input[type="radio"]:checked+label {
    border-color: #ccc;
    &::before{
      background-color: #53dbb5;
   }
  }
`;

const RadioField = ({ input, meta, label, step, id, ...props }) => (
  <RadioInputCustom>
    <FormCheck
      inline
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

      <Button type="submit" disabled={submitting}>
        Next
      </Button>
    </form>
  );
};

export default reduxForm({
  form: 'Quiz', // a unique identifier for this form
  // validate
})(QuizForm);
