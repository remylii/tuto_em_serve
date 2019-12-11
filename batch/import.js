const fs = require("fs");
const csv = require("csv");
const path = require("path");
const CsvVOClass = require("./CsvVOClass");
const Sample = require("../src/repositories/sample");

const filepath = path.join(__dirname, "../storage/csv", "sample.csv");
const encoding = { encoding: "utf-8" };

const fileReaderStream = fs.createReadStream(filepath, encoding);

const parser = csv.parse(async (err, data) => {
  if (err) {
    console.error(err);
    process.exit();
  }

  let results = [];
  data.forEach((elem, index) => {
    if (index === 0) {
      return true;
    }

    const vo = new CsvVOClass(elem);
    results.push(vo.toJson());
  });

  if (results.length <= 0) {
    console.log("No loaded data");
    process.exit();
  }

  const sample = new Sample();
  sample.bulkInsert(results);

  console.log(process.memoryUsage());
});

fileReaderStream.pipe(parser);
