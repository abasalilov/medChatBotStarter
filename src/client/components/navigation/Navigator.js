import React from "react";
import { MobileNav } from "./MobileNav";
import { HeaderNav } from "./HeaderNav";

export const Navigator = props => {
  return props.mobile ? <MobileNav {...props} /> : <HeaderNav {...props} />;
};
