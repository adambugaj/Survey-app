import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CardActions } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import AddSurvey from '../components/AddSurveyPage';
import { removeSurvey, editSurvey } from '../actions/surveyGenerator';

// Wysswietla poprzednie dane po nacisnieciu edit wybranej ankiety, lecz nie zwraca zmienionych danych - dispatch is not a function - do poprawienia
const EditSurvey = (props) => {
  console.log(props);
  return (
      <div className="content-conatainer1">
        <div>
          <p>Edit Survey</p>
        </div>
        <AddSurvey
          survey={props.survey}
          onSubmit={(survey) => {
            props.disptach(editSurvey(props.match.params.id, survey));
            props.history.push('/');
          }}
        />
        <MuiThemeProvider>
          <CardActions>
            <Link to="/">
            <FlatButton type="button" label="Remove" secondary={true} onClick={
              () => {
                props.dispatch(removeSurvey({surveyID: props.match.params.id}));
              }
            }/>
            </Link>
          </CardActions>
        </MuiThemeProvider>
      </div>
    );
  };

  const mapStateToProps = (state, props) => {
    console.log(state);
    return {
      survey: state.survey.find((survey) => {
        console.log(survey);
        return survey.surveyID === props.match.params.id;
      })
    };
  };

export default connect(mapStateToProps)(EditSurvey);



/* Rozwiązanie na edycje - aktualizacja
export class EditSurvey extends React.Component {
  onSubmit = (survey) => {
    console.log(survey);
    // Be sure what you type as Parameter, don't use destructuring ({})
    this.props.survey(survey);
    this.props.history.push(`/`);
  };
  render() {
    return (
      <div className="content-conatainer1">
        <p>Edit Survey</p>
        <AddSurvey
          survey={this.props.survey}
          onSubmit={this.onSubmit}
        />
        <MuiThemeProvider>
          <CardActions>
            <Link to="/">
            <FlatButton type="submit" label="Remove" secondary={true} onClick={
              () => {
                props.dispatch(removeSurvey({surveyID: props.match.params.id}));
              }
            }/>
            </Link>
          </CardActions>
        </MuiThemeProvider>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  survey: (survey) => {
      dispatch(editSurvey(survey));
    }
  }
};
export default connect(undefined, mapDispatchToProps)(EditSurvey);
*/
