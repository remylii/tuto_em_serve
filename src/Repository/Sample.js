const DB = require("../Infrastructure/DB");

module.exports = class Sample {
  collection_name = "sample";

  async findAll() {
    const DBClient = new DB();

    let res;
    try {
      const collection = await DBClient.getCollection("sample");
      res = await collection.find().toArray();

      return res;
    } catch (err) {
      console.error(err);
    } finally {
      DBClient.close();
    }
  }
};
