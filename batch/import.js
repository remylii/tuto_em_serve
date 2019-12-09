const fs = require("fs");
const csv = require("csv");
const path = require("path");
const CsvVOClass = require("./CsvVOClass");
const DBClient = require("./DBClient");

const filepath = path.join(__dirname, "../storage/csv", "sample.csv");
const encoding = { encoding: "utf-8" };

const fielReaderStream = fs.createReadStream(filepath, encoding);

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
    const obj = JSON.parse(JSON.stringify(vo));
    results.push(obj);
  });

  const dbClient = new DBClient();
  await dbClient.sampleBulkInsert(results);
  console.log(process.memoryUsage());
});

fielReaderStream.pipe(parser);
