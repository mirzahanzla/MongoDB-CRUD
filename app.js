const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const itemRouter = require("./routes/item");

const app = express();

app.use(bodyParser.json());

// Database Connection
const dbURI = "mongodb://localhost:27017/hanzla";
mongoose
  .connect(dbURI, {})
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use("/items", itemRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
