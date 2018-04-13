import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SurveyForm from './SurveyFormPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import FlatButton from 'material-ui/FlatButton';
import ButtonAddSurvey from './ButtonAddSurvey';
import LinearProgress from 'material-ui/LinearProgress';

class SurveyPage extends React.Component {

  state = {
    surveyNumber: 0,
    procentNumber: 100 / this.props.surveyNext.length,
    procentUpdate: 100 / this.props.surveyNext.length,
    completed: 50
  };

  // Przycisk cofajacy ankiete plus konieczne warunki
  onBack = () => {
      const {surveyNumber} = this.state;
      console.log(this.props.survey)

        if (surveyNumber === 0) {
          this.setState({surveyNumber: surveyNumber})
          this.props.history.push(`/survey/${this.props.surveyNext[surveyNumber].surveyID}`);
        } else {
          this.setState({surveyNumber: surveyNumber - 1})
          this.props.history.push(`/survey/${this.props.surveyNext[surveyNumber].surveyID}`);
        }
  }

  // Przycisk next
  onNext = () => {
      const {surveyNumber, procentNumber, procentUpdate} = this.state;
      console.log(this.props)

      // Pasek progresu ankiety - dane w zależności od klikniecia przycisku next
      if (procentUpdate <= 100){
        this.setState({procentUpdate: procentNumber + procentUpdate});
      }

      // Warunki dla przycisku next:
      if ((this.props.surveyNext.length - 1) === surveyNumber) {
        this.setState({surveyNumber: surveyNumber});
        this.props.history.push(`/survey/${this.props.surveyNext[surveyNumber].surveyID}`);
      } else if (surveyNumber === -1) {
        this.setState({surveyNumber: 1});
        this.props.history.push(`/survey/${this.props.surveyNext[0].surveyID}`);
      } else {
      this.setState({surveyNumber: this.state.surveyNumber + 1});
      this.props.history.push(`/survey/${this.props.surveyNext[surveyNumber].surveyID}`);
    }
  }

  render() {
    const {surveyNumber} = this.state;
  return (
    <div >
      <SurveyForm  key={Math.random()}{...this.props.survey} />
      <MuiThemeProvider>
      <Card className="content-conatainer_component">
        <CardHeader className="content-conatainer_component" title={`You have already finished ${this.state.procentUpdate <= 100 ? Math.floor(this.state.procentUpdate) : 100} %`} />
        <CardActions>
          <FlatButton
            type="button"
            label="Back"
            secondary={true}
            disabled={surveyNumber === -1}
            onClick={this.onBack}
            backgroundColor="#F5F5F5"/>
          <FlatButton
            type="button"
            label="Next"
            onClick={this.onNext}
            primary={true}
            className="box-layout__button1"
            backgroundColor="#F5F5F5"/>
          </CardActions>
          <LinearProgress mode="determinate" value={this.state.procentUpdate} />
        </Card>
      </MuiThemeProvider>
      <div className="content-conatainer_component">
        <ButtonAddSurvey />
      </div>
    </div>
  );
};
}

const mapStateToProps = (state, props) => {
  console.log(state)
  return {
    survey: state.survey.find((survey) => {
      return survey.surveyID === props.match.params.id
    }),
    surveyNext: state.survey.map((survey) => {
      return survey;
    })
  };
};
export default connect(mapStateToProps)(SurveyPage);
