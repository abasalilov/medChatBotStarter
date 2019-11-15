import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import Routes from "./client/Routes";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
import cluster from "cluster";

global.navigator = { userAgent: "all" };

const PORT = process.env.PORT || 3000;

// if (cluster.isMaster) {
//   // Count the machine's CPUs
//   let cpuCount = require("os").cpus().length;

//   // Create a worker for each CPU
//   for (let i = 0; i < 2; i++) {
//     cluster.fork();
//   }

//   // Listen for dying workers
//   cluster.on("exit", function(worker) {
//     // Replace the dead worker, we're not sentimental
//     console.log("Worker %d died :(", worker.id);
//     cluster.fork();
//   });
// } else {
const app = express();

app.use(
  "/api",
  proxy("http://localhost:5000", {
    proxyReqOptDecorator(opts) {
      return opts;
    }
  })
);
app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createStore(req);
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
  // console.log("Worker %d running!", cluster.worker.id);
});
// }
