import { RESIZE_EVENT } from "../actions";

export default (state = null, action) => {
  switch (action.type) {
    case RESIZE_EVENT:
      const newState = action.payload;
      return newState;
    default:
      return state;
  }
};
