
const surveyReducerDefault = [];

const surveyReducer = (state = surveyReducerDefault, action) => {
  switch (action.type) {
    // Dodaje nową ankiete oraz pozostawia już zapisane - spread operators w użyciu
    case 'ADD_SURVEY':
    console.log(state, action)
      return [
        ...state,
        action.survey
      ];
    // Usuwanie wybranej ankiety poprzez filtrowanie
    case 'REMOVE_SURVEY':
      return state.filter(({ surveyID }) => {
        console.log(surveyID, action.surveyID)
        return surveyID !== action.surveyID;
      });
    // Edycja klknietej ankiety poprzez porównanie ID z obiektu i ID z adresu
    case 'EDIT_SURVEY':
      return state.map((survey) => {
        console.log(survey, action.updates)
        if(survey.surveyID === action.surveyID) {
          return {
            ...survey,
            ...action.updates
          }
        } else {
          return survey;
        }
      });
    default:
      return state;
  }

};

export default surveyReducer;
