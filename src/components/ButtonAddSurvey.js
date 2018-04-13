import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

// Przycisk dodania nowej ankiety
const ButtonAddSurvey = (props) => {
  console.log(props);
  return (
    <div className="content-conatainer_button-survey">
      <MuiThemeProvider>
        <Link to="/add-survey">
          <FlatButton
            type="button"
            label="Add a new survey"
            default={true}
            className="content-conatainer_button"
            backgroundColor="#F5F5F5"/>
        </Link>
      </MuiThemeProvider>
    </div>
  );
};

// Połączenie danych z głównym obiektem store
const mapStateToProps = (state) => {
  console.log(state)
  return {
    survey: state.survey
  };
};
export default connect(mapStateToProps)(ButtonAddSurvey);
