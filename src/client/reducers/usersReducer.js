import {
  FETCH_USERS,
  REGISTER_USER,
  CONFIRM_UNIQUE_USERNAME,
  SET_FORM_ERROR
} from "../actions";

export default (
  state = { confirmUserNameMsg: "", registered: false, formError: false },
  action
) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data;
    case REGISTER_USER:
      const newRegisteredUserState = Object.assign({}, state);
      newRegisteredUserState.registered =
        action.payload.statusText === "Created" ? true : false;
      return newRegisteredUserState;
    case CONFIRM_UNIQUE_USERNAME:
      const newState = Object.assign({}, state);
      const response = action.payload.data;
      newState.confirmUserNameMsg = response;
      if (response === "This username is taken") {
        newState.formError = true;
      } else {
        newState.formError = false;
      }
      return newState;
    case SET_FORM_ERROR:
      const newErrorState = Object.assign({}, state);
      newErrorState.formError.error = action.payload.error;
      return newErrorState;
    default:
      return state;
  }
};
