const DB = require("../infrastructures/DB");

module.exports = class BaseModel {
  _DBClient;

  _collection_name;

  constructor(collection_name) {
    this._DBClient = new DB();
    this._collection_name = collection_name;
  }

  /**
   *
   * @param {string} name
   */
  async getCollection(name) {
    const collection_name = name || this._collection_name;
    if (!collection_name) {
      throw new Error("collection name is undefined");
    }

    const collection = await this._DBClient.getCollection(collection_name);
    return collection;
  }

  close() {
    if (this._DBClient) {
      this._DBClient.close();
    }
  }
};
