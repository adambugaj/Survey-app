import React from 'react';
import { connect } from 'react-redux';
import AddSurvey from './AddSurveyPage';
import { CardHeader } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { addSurvey } from '../actions/surveyGenerator';



const AcceptSurvey = (props) => {
  console.log(props)
  return (
      <div className="content-conatainer">
      <MuiThemeProvider>
        <CardHeader
          title={`Create a Survey`}
        />
      </MuiThemeProvider>
      <AddSurvey
        // Parameter (survey) must have been changed to save the next review
        // survey is a data from a form
        onSubmit={(survey) => {
          props.dispatch(addSurvey(survey));
          props.history.push(`/survey/${survey.surveyID}`);
        }}
      />
      </div>
  );
};

export default connect()(AcceptSurvey);
