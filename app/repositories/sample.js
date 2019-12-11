const BaseModel = require("./baseModel");

module.exports = class Sample extends BaseModel {
  constructor() {
    super("sample");
  }

  async findAll() {
    let res;
    try {
      const collection = await super.getCollection();
      res = await collection.find().toArray();

      return res;
    } catch (err) {
      console.error(err);
      throw new Error(err);
    } finally {
      super.close();
    }
  }

  async bulkInsert(data) {
    try {
      const collection = await super.getCollection();
      const res = await collection.insertMany(data);

      return res;
    } catch (err) {
      console.error(err);
      throw new Error(err);
    } finally {
      super.close();
    }
  }
};
