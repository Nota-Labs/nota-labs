// @flow
import { createBrowserHistory } from 'history';
import qs from 'qs';

// Analytics
import { initialize as loadGoogleAnalytics, page as pageView } from '@analytics/google-analytics';

const history = createBrowserHistory();

loadGoogleAnalytics({
  config: {
    trackingId: 'UA-148600034-1',
  },
});

history.location = {
  ...history.location,
  query: qs.parse(history.location.search.substr(1)),
  state: {},
};

/* istanbul ignore next */
history.listen(() => {
  pageView();

  history.location = {
    ...history.location,
    query: qs.parse(history.location.search.substr(1)),
    state: history.location.state || {},
  };
});

const { go, goBack, push, replace } = history;

export { go, goBack, push, replace };
export default history;
