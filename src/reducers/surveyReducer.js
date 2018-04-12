
const surveyReducerDefault = [];

const surveyReducer = (state = surveyReducerDefault, action) => {
  switch (action.type) {
    case 'ADD_SURVEY':
    console.log(state, action)
      return [
        ...state,
        action.survey
      ];
    case 'REMOVE_USER':
      return state.filter(({ userID }) => {
        return userID !== action.userID;
      });
    case 'EDIT_USER':
    console.log(action, state)
      return state.map((user) => {
        console.log(user, action.updates)
        if(user.userID === action.userID) {
          return {
            ...user,
            ...action.updates
          }
        } else {
          return user;
        }
      });
    default:
      return state;
  }

};

export default surveyReducer;
