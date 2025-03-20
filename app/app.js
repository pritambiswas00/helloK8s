const express = require("express");
const app = express();
const PORT = 3000;

//Middleware for JSON Parse
app.use(express.json());

//Routes
app.get("/", async (req, res) => {
  res.json({ message: "Hello World" });
});

//Start Server
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Server running at http://localhost:${PORT}`);
});
