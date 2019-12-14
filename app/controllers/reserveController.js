exports.show = (req, res, next) => {
  const { reserve_id } = req.params;
  if (reserve_id) {
  }

  res.send({
    reserve_id
  });
};
