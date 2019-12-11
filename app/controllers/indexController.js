const Sample = require("../repositories/sample");

exports.index_list = async function(req, res) {
  const { id } = req.query;
  console.log(id);
  const sample = new Sample();
  const result = await sample.findAll();

  res.send({ result });
};
