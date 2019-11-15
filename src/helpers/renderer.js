import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import { Helmet } from "react-helmet";
import Routes from "../client/Routes";
import { isMobile } from "../client/utils";
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName
} from "@material-ui/core/styles";

import { SheetsRegistry } from "react-jss/lib/jss";
import JssProvider from "react-jss/lib/JssProvider";

export default (req, store, context) => {
  const sheetsRegistry = new SheetsRegistry();
  const theme = createMuiTheme({
    palette: {
      type: "light"
    },
    typography: {
      useNextVariants: true
    }
  });
  const generateClassName = createGenerateClassName();
  const content = renderToString(
    <JssProvider
      registry={sheetsRegistry}
      generateClassName={generateClassName}
    >
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
        <Provider store={store}>
          <StaticRouter location={req.path} context={context}>
            <React.Fragment>{renderRoutes(Routes)}</React.Fragment>
          </StaticRouter>
        </Provider>
      </MuiThemeProvider>
    </JssProvider>
  );

  const helmet = Helmet.renderStatic();
  const css = sheetsRegistry.toString();
  const mobile = isMobile(req.headers["user-agent"]);

  return `
    <html>
      <title>LLEAP Voice Controller</title>
          <head>
          <link rel="stylesheet" href="https://use.typekit.net/nex3vbe.css">
          <link href="https://fonts.googleapis.com/css?family=Raleway:400,700,700i,800&display=swap" rel="stylesheet">
          <style>
               .mobileRootStyle {
                color: #fff;
                font-size: 3rem;
                height: 91vh;
                width:100%;
                position:fixed;
                top: 35;
                left: 0;
                padding: 0;
                margin: 3rem 0 0 0;
                overflow: scroll;
                }
                .regRootStyle {
                margin-top:3rem;
                background-color:#FFFFFF
                }

              </style>
              <link rel="shortcut icon" href="favicon.ico">
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
              </head>
                <body>
                  <style id="jss-server-side">
                    ${css}
                  </style>
                    <div id="root"><nav/><div/>${content}</div>
                  <script>
                    var initialStore = ${serialize(store.getState())};
                    initialStore.mobile =${mobile};
                    window.INITIAL_STATE = initialStore;
                  </script>
                  <script src="bundle.js"></script>
                </body>
          </html>
        `;
};
