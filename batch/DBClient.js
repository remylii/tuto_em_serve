const MongoClient = require("mongodb").MongoClient;

module.exports = class DBClient {
  url = "mongodb://localhost:27017";
  options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
  db_name = "test";

  async sampleBulkInsert(data) {
    let client;

    try {
      client = await new MongoClient.connect(this.url, this.options);

      const db = client.db(this.db_name);

      const res = await db.collection("sample").insertMany(data);
      return res;
    } catch (err) {
      console.error(err);
    } finally {
      client.close();
    }
  }
};
