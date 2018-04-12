import React from 'react';
import { connect } from 'react-redux';
import AddSurvey from './AddSurveyPage';
import { addSurvey } from '../actions/surveyGenerator';



const AcceptSurvey = (props) => {
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

export default connect()(AcceptSurvey);


// class AcceptSurvey extends React.Component {
//
//   onSubmit = (surveyData) => {
//         console.log(surveyData, this.props);
//     // Be sure what you type as Parameter, don't use destructuring ({})
//     this.props.survey(surveyData);
//     this.props.history.push('/survey/1');
//   };
//
//   render() {
//     return (
//       <div>
//         <AddSurvey
//           onSubmit={this.onSubmit}
//         />
//       </div>
//     );
//   }
// };
//
// // Can we do it in one component?!
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//   survey: (userData) => {
//     console.log(userData)
//       dispatch(addSurvey(userData));
//     }
//   }
// };
//
// export default connect(undefined, mapDispatchToProps)(AcceptSurvey);
