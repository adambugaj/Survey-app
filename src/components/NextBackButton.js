import React from 'react';
import { connect } from 'react-redux';
import AddSurvey from './AddSurveyPage';
import { addSurvey } from '../actions/surveyGenerator';



const NextBackButton = (props) => {
  console.log(props)
  return (
    <div>
      <div className="content-conatainer">
      <AddSurvey
        // Parameter (survey) must have been changed to save the next review
        // survey is a data from a form
        onSubmit={(survey) => {
          props.dispatch(addSurvey(survey));

          props.history.push(`/survey/${survey.surveyID}`);
        }}
      />
      </div>
    </div>
  );
};

export default connect()(NextBackButton);
