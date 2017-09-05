const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router();
const middlewares = jsonServer.defaults();
const metrics = require("./metrics.json");

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get("/metrics", (req, res) => {
  res.json(metrics);
});

// Use default router
server.use(router);
server.listen(9092, () => {
  console.log("Mocking GM-Fabric-Go on localhost:9092/metrics");
});
