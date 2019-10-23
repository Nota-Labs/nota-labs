import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Button from 'react-bootstrap/Button';
import FormCheck from 'react-bootstrap/FormCheck';
import FormControl from 'react-bootstrap/FormControl';

const RadioField = ({ input, meta, label, step, id, ...props }) => (
  <FormCheck 
    inline 
    id={`input${id}`}
    name={`step${step}`}
    label={label} 
    type='radio' 
    {...input}
    {...props}
  />
);

const FieldInput = ({ input, meta, id, type, placeholder, label, ...props }) => (
  <FormControl
    id={`input${id}`}
    type={type}
    placeholder={placeholder}
    label={label}
    {...input}
    {...props}
  />
);

const QuizForm = (props) => {
  const {
    handleSubmit, submitting, currentQuestion, currentStep
  } = props

  console.log('CurrentQuestion: ', currentQuestion)
  console.log('Current Step: ', currentStep)

  if (currentStep === 5) {
    return (
      <div>
        <h3>Finished!</h3>
        <p>Use <code>localStorage.clear()</code> for now to restart</p>
      </div>
    )
  }
  return (
    <form onSubmit={handleSubmit}>

      <p>{ currentQuestion.question }</p>

      {currentQuestion.answers.map(( answer, index ) => (
        <Field
          id={index}
          name="answer"
          component={RadioField}
          step={currentStep}
          props={{ value: index }}
          label={<span><strong>{answer.title}</strong><p>{answer.label}</p></span>}
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

      <Button type='submit' disabled={submitting}>
        Next
      </Button>
    </form>
  );
}

export default reduxForm({
  form: 'Quiz',  // a unique identifier for this form
  // validate
})(QuizForm)