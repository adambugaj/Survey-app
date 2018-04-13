import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import SurveyRouter from './routers/SurveyRouter';
import {addSurvey} from './actions/surveyGenerator';

const store = configureStore()

store.dispatch(addSurvey({surveyID: 123-132, question: 'What would you prefer to learn?',
    answer1: 'Javascript',
    answer2: 'Java',
    answer3: 'PHP'
  }));


// connect store with every components - allow download the data
const jsx = (
  <Provider store={store}>
    <SurveyRouter />
  </Provider>
);

// Run app ID from HTML code
ReactDOM.render(jsx, document.getElementById('app'));
