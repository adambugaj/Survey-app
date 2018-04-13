// Dodaj nową ankiete do obiektu - pytanie i odpowiedzi
const addSurvey = ({
  surveyID = '',
  question = '',
  answer1 = '',
  answer2 = '',
  answer3 = ''
} = {}
) => ({
  type: "ADD_SURVEY",
  survey: {
    surveyID,
    question,
    answer1,
    answer2,
    answer3
  }
});

// Usuwanie wybranej ankiety
const removeSurvey = ({ surveyID } = {}) => {
  return {
    type: 'REMOVE_SURVEY',
    surveyID
  };
};

// Edycja kliknietej ankiety
const editSurvey = (surveyID, updates) => {
  console.log(surveyID, updates)
  return {
    type: 'EDIT_SURVEY',
    surveyID,
    updates
  };
};

export { addSurvey, removeSurvey, editSurvey };
