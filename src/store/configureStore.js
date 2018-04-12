import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import surveyReducer from '../reducers/surveyReducer';

// Store is a core of this app that allows to send data to all components
export default () => {
  const store = createStore(
    combineReducers({
      survey: surveyReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};
