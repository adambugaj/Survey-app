import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Header } from '.././components/Header';
import SurveyPage from '.././components/SurveyPage';
import AcceptSurvey from '.././components/AcceptSurveyPage';
import EditSurvey from '.././components/EditSurveyPage';
import ButtonAddSurvey from '.././components/ButtonAddSurvey';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();
const SurveyRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={ButtonAddSurvey} exact={true} />
          <Route path="/survey/:id" component={SurveyPage} />
          <Route path="/edit-survey/:id/" component={EditSurvey} />
          <Route path="/sur" component={EditSurvey} />
          <Route path="/add-survey" component={AcceptSurvey} />
        </Switch>
      </div>
    </Router>
  );
};

export default SurveyRouter;
