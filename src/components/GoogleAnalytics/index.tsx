import ReactGA from 'react-ga';

const useAnalyticsEventTracker = (category: string = "'G-LW9F39G459") => {
  const eventTracker = (action = 'test action', label = 'test label') => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};

export default useAnalyticsEventTracker;
