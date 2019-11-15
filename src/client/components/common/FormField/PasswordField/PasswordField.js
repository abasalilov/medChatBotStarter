import React from "react";
import { RegPasswordField } from "./RegPasswordField";
import { MobilePasswordField } from "./MobilePasswordField";

export const PasswordField = props =>
  props.mobile ? (
    <MobilePasswordField {...props} />
  ) : (
    <RegPasswordField {...props} />
  );
