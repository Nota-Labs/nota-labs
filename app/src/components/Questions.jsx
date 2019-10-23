import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import styled from 'styled-components';
import treeChanges from 'tree-changes';
import { appColor } from 'modules/theme';

import { getRepos, showAlert, switchMenu } from 'actions';
import { STATUS } from 'constants/index';

import { reduxForm, Field } from 'redux-form';

// import { Button } from 'react-bootstrap';

// const RadioField = ({ input, meta, ...rest }) => (
//   <BS.Radio {...input} {...rest} checked={input.value === rest.value} />
//   <Form.Check
//         type="radio"
//         label={label}
//         id={"STEP_" + step}
//       />
// );

const QuizForm = (props) => {
  // const {
  //   handleSubmit, submitting
  // } = props

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <Field
  //       name="step1"
  //       component={RadioField}
  //       props={{ value: 0 }}
  //     >
  //       No
  //     </Field>
  //     <Field
  //       name="step1"
  //       component={RadioField}
  //       props={{ value: 1 }}
  //     >
  //       Somewhat
  //     </Field>
  //     <Field
  //       name="step1"
  //       component={RadioField}
  //       props={{ value: 2 }}
  //     >
  //       Yes
  //     </Field>
  //     <div>
  //       <Button type="submit" disabled={submitting}>
  //         Next
  //       </Button>
  //     </div>
  //   </form>
  // );
  return <div>hey</div>;
}

export default compose(
  connect(
    state => {
      return ({
        quiz: state.quiz,
      })
    },
  ),
  reduxForm({
    form: 'Quiz',  // a unique identifier for this form
    // validate
  }),
)(QuizForm)
