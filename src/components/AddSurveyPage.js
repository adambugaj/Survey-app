import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addSurvey } from '../actions/surveyGenerator';
// Material design components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class AddSurvey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      surveyID: `${Math.floor(Math.random() * 100)}-${Math.floor(Math.random() * 100)}`,
      question: props.survey ? props.survey.question : '',
      answer1: props.survey ? props.survey.answer1 : '',
      answer2: '',
      answer3: ''
    }
  }

// Add Username to the object state
  onQuestion = (e) => {
    const name = e.target.value;
      this.setState(() => ({ question: name }));
  };

  onAnswer1 = (e) => {
    const name = e.target.value;
      this.setState(() => ({ answer1: name }));
  };

// Po zatwierdzeniu przyciskiem submit wysyłamy dane do obiektu
  onSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmit({
        surveyID: this.state.surveyID,
        question: this.state.question,
        answer1: this.state.answer1,
        answer2: this.state.answer2,
        answer3: this.state.answer3,
      });
    };

// Interfejs aplikacji oraz komponenty material-ui
  render() {
    return (
      <div className="content-conatainer">
        <form onSubmit={this.onSubmit}>
        <MuiThemeProvider>
          <Card>
            <TextField
              floatingLabelText="Question"
              className="input-group"
              type="text"
              value={this.state.question}
              onChange={this.onQuestion}
              className="input-group__item"
          />
            <TextField
                floatingLabelText="Answer 1"
                type="text"
                value={this.state.answer1}
                onChange={this.onAnswer1}
                className="input-group__item"
            />
            <TextField
                floatingLabelText="Answer 2"
                type="text"
                value={this.state.answer2}
                onChange={this.onAnswer2}
                className="input-group__item"
            />
            <TextField
                floatingLabelText="Answer 3"
                type="text"
                value={this.state.answer3}
                onChange={this.onAnswer3}
                className="input-group__item"
            />
            <CardActions>
              <FlatButton onSubmit={this.onSubmit} type="submit" label="Submit" />
              <Link to="/">
                <FlatButton type="button" label="Cancel" secondary={true}   />
              </Link>
            </CardActions>
          </Card>
        </MuiThemeProvider>
        </form>
      </div>
    );
  }
};

// React components doesn't need to have connect
// const mapStateToProps = (state) => {
//   console.log(state)
//   return {
//     survey: state.survey.sort((a,b) => {
//       return b.surveyNumber - a.surveyNumber;
//     })
//   };
// };
export default AddSurvey;
