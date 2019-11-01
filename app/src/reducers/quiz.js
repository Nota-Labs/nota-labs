import { handleActions } from 'modules/helpers';

import { ActionTypes } from 'constants/index';

export const quizState = {
  currentStep: -1,
  answers: [],
  questions: [
    {
      id: 1,
      step: 1,
      question: 'Can you easily demonstrate where your product serves real users needs, identified through research?',
      answers: [
        {
          title: 'No',
          label: 'The product is mostly based on stakeholder requirements, with little or no direct user research behind it.',
        },
        {
          title: 'Somewhat',
          label: 'We\'ll do a little users-needs research before designing, and may create artefacts like personas to inform the product design.',
        },
        {
          title: 'Yes',
          label: 'Not only do we have a clear detailed map of users needs based on research, we also know which needs are \'hygiene\', which are \'delighters\', which are met and unmet by other services. The product roadmap is heavily based on this.',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      question: 'Do you learn your users \'mental models\' before you start designing?',
      answers: [
        {
          title: 'No',
          label: 'We\'ll jump straight into design. If we conduct user research, it is only to capture usability issues.',
        },
        {
          title: 'Somewhat',
          label: 'Alongside up-front user-needs research, we try to employ UX best practices such as cognitive psychology, and behavioural psychology.',
        },
        {
          title: 'Yes',
          label: 'Not only do we employ these principles, but our research informs us how our users expect a service like ours to work (mental models), and also what their decision-making criteria are for choosing and using our service (choice architecture).',
        },
      ],
    },
    {
      id: 3,
      step: 3,
      question: 'Is the product vision clear?',
      answers: [
        {
          title: 'No',
          label: 'We either don\'t have a defined vision, or if we do it is generic and mostly written using superlatives.',
        },
        {
          title: 'Somewhat',
          label: 'The vision is quite clear, and is bought to life through something illustrative like a storyboard.',
        },
        {
          title: 'Yes',
          label: 'The vision is clear, memorable and grounded on users specific unmet needs. It is bought to life through something tangible like a prototype.',
        },
      ],
    },
    {
      id: 4,
      step: 4,
      question: 'Can you create and test new product concepts easily?',
      answers: [
        {
          title: 'No',
          label: 'We\'re too focused on business-as-usual. Any concepting has to happen in a limited window at the start of a new project.',
        },
        {
          title: 'Somewhat',
          label: 'Our team can create simple prototypes and conduct light user-testing if we raise the business case for this.',
        },
        {
          title: 'Yes',
          label: 'We can create high definition prototypes quickly and simply. We can test and iterate these, and can pivot to different product concepts quickly, as needed.',
        },
      ],
    },
    {
      id: 5,
      step: 5,
      question: 'Does your design team utilise a design-system?',
      answers: [
        {
          title: 'No',
          label: 'We design journeys in an ad-hoc way. We struggle to achieve consistency across our digital journeys.',
        },
        {
          title: 'Somewhat',
          label: 'Our UI design team use a basic component library.',
        },
        {
          title: 'Yes',
          label: 'We have a design system which is a full kit for designing digital experiences: with user-tested patterns, principles, as well as coded components. It is maintained as a product in its own right.',
        },
      ],
    },
  ],
};

export default {
  quiz: handleActions(
    {
      [ActionTypes.QUIZ_REMOVE_LATEST_ANSWER]: state => {
        state.answers = state.answers.splice(-1,1);
      },
      [ActionTypes.QUIZ_REMOVE_ANSWER]: (state, { payload: { id } }) => {
        state.answers = state.answers.filter(d => d.id !== id);
      },
      [ActionTypes.QUIZ_ADD_ANSWER]: (state, { payload }) => {
        state.answers.push(payload.answer);
      },
      [ActionTypes.QUIZ_START]: state => {
        state.currentStep = 0;
        state.answers = [];
      },
    },
    quizState,
  ),
};
