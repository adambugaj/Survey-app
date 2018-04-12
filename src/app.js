import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import SurveyRouter from './routers/SurveyRouter';

const store = configureStore()

// connect store with every components - allow download the data
const jsx = (
  <Provider store={store}>
    <SurveyRouter />
  </Provider>
);

// Run app ID from HTML code
ReactDOM.render(jsx, document.getElementById('app'));
