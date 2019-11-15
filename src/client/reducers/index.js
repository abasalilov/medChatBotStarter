import { combineReducers } from "redux";
import mobileReducer from "./mobileReducer";
import emailReducer from "./emailReducer";
import medBotReducer from "./medBotReducer";
import { reducer as form } from "redux-form";

export default combineReducers({
  mobile: mobileReducer,
  email: emailReducer,
  medBot: medBotReducer,
  form
});
