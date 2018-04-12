const addSurvey = ({
  surveyID = '',
  surveyNumber = 0,
  question = '',
  answer1 = '',
  answer2 = '',
  answer3 = ''
} = {}
) => ({
  type: "ADD_SURVEY",
  survey: {
    surveyID,
    surveyNumber,
    question,
    answer1,
    answer2,
    answer3
  }
});

const removeUser = ({ userID } = {}) => ({
  type: 'REMOVE_USER',
  userID
});

const editUser = (userID, updates) => {
  return {
    type: 'EDIT_USER',
    userID,
    updates
  }
};

const filterTransaction = (transactionSum) => {
  return {
    type: 'FILTER_TRANSACTION',
    transactionSum
  }
};

export { addSurvey, removeUser, editUser };
