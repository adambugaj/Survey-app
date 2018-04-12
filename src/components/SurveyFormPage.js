import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

// Zwykły header w aplikacji
export const SurveyForm = (props) => {
  console.log(props);
  return (
    <MuiThemeProvider>
      <div className="content-conatainer1">
        <Card className="content-conatainer_component">
          <CardHeader
            title={props.question}
          />
          <RadioButtonGroup className="content-conatainer_component" name="shipSpeed" defaultSelected="not_light">
           <RadioButton
             className="input-group__radio"
             value="not_light"
             label={props.answer1}
           />
           <RadioButton
             className="input-group__radio"
             value="light"
             label={props.answer2}
           />
           <RadioButton
             className="input-group__radio"
             value="not_light1"
             label={props.answer3}
           />
           </RadioButtonGroup>
          <CardActions>
          </CardActions>
        </Card>

      </div>
    </MuiThemeProvider>
  );
};

export default SurveyForm;
