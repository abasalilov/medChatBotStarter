import { EMAIL_SUBMIT, EMAIL_SUCCESS, EMAIL_FAILED } from "../actions";

export default function(
  state = { result: false, message: "", pending: false, error: null },
  action
) {
  switch (action.type) {
    case EMAIL_SUBMIT:
      const submitState = Object.assign({}, state);
      submitState.pending = true;
      return submitState;
    case EMAIL_SUCCESS:
      const successState = Object.assign({}, state);
      successState.result = true;
      successState.pending = false;
      return successState;
    case EMAIL_FAILED:
      const failedState = Object.assign({}, state);
      failedState.result = false;
      failedState.error = "error";
      return failedState;
    default:
      return state;
  }
}
