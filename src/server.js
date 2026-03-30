const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "Dummy Express server is running",
    timestamp: new Date().toISOString()
  });
});

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/api/users", (_req, res) => {
  res.json([
    { id: 1, name: "Alice Example", role: "admin" },
    { id: 2, name: "Bob Example", role: "user" }
  ]);
});

app.post("/api/echo", (req, res) => {
  res.status(201).json({
    message: "Payload received",
    body: req.body
  });
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
