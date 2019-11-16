import React from "react";
import App from "./App";
import { HomePage, VoicePage } from "./pages";

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/home",
        exact: true
      },
      { ...VoicePage, path: "/VOICE-ACTIVATION", exact: true }
    ]
  }
];
