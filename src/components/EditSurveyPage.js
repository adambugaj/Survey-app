import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import AddSurvey from '../components/AddSurveyPage';

// Zwykły header w aplikacji
const EditSurvey = (props) => {
  console.log(props);
  return (
      <div className="content-conatainer1">
        <p>You're editing</p>
        <AddSurvey />
        <MuiThemeProvider>
          <CardActions>
            <FlatButton type="submit" label="Remove" />
          </CardActions>
        </MuiThemeProvider>
      </div>
    );
  };

export default connect()(EditSurvey);
