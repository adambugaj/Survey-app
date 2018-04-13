import React from 'react';
import { connect } from 'react-redux';
import AddSurvey from './AddSurveyPage';
import { CardHeader } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { addSurvey } from '../actions/surveyGenerator';

// Akceptacja nowej ankiety
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

/*Drugie rozwiązanie z pełnym komponetnem - moze pomoc przy edycji
export class AcceptSurvey extends React.Component {
  onSubmit = (survey) => {
    console.log(survey);
    // Be sure what you type as Parameter, don't use destructuring ({})
    this.props.survey(survey);
    this.props.history.push(`/survey/${survey.surveyID}`);
  };
  render() {
    return (
      <div>
        <AddSurvey
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  survey: (survey) => {
      dispatch(addSurvey(survey));
    }
  }
};

export default connect(undefined, mapDispatchToProps)(AcceptSurvey);
*/
