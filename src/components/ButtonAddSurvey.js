import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SurveyForm from './SurveyFormPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import FlatButton from 'material-ui/FlatButton';

// Zwykły header w aplikacji
const ButtonAddSurvey = (props) => {
  console.log(props);
  return (
    <div>
      <MuiThemeProvider>
        <Link to="/add-survey">
          <FlatButton
            type="button"
            label="Add a new survey"
            default={true}
            fullWidth={true}
            backgroundColor="#F5F5F5"/>
        </Link>
      </MuiThemeProvider>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state)
  return {
    survey: state.survey
  };
};
export default connect(mapStateToProps)(ButtonAddSurvey);
