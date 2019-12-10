const express = require("express");
const bodyParser = require("body-parser");

const app = new express();
const port = process.env.PORT || 3000;

const Sample = require("./Repository/Sample");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const sample = new Sample();
  const result = await sample.findAll();

  res.status(200).send({ result });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
