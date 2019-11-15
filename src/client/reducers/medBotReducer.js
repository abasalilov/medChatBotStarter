import {
  SUBMIT_MEDBOT_QUERY_PENDING,
  SUBMIT_MEDBOT_QUERY_COMPLETE
} from "../actions";

export default function(
  state = { pending: false, result: false, query: "" },
  action
) {
  switch (action.type) {
    case SUBMIT_MEDBOT_QUERY_PENDING:
      const medBotQueryState = Object.assign({}, state);
      medBotQueryState.pending = true;
      return medBotQueryState;
    case SUBMIT_MEDBOT_QUERY_COMPLETE:
      const medBotQueryDoneState = Object.assign({}, state);
      medBotQueryDoneState.result = action.payload;
      return medBotQueryDoneState;
    default:
      return state;
  }
}
