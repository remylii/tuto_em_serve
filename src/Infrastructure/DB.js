const MongoClient = require("mongodb").MongoClient;

module.exports = class DB {
  url = "mongodb://localhost:27017";
  options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
  db_name = process.env.DB_NAME || "test";

  _client;

  _db;

  async db() {
    this._client = await new MongoClient.connect(this.url, this.options);
    return this._client.db(this.db_name);
  }

  async getCollection(collection_name) {
    const db = await this.db();
    return db.collection(collection_name);
  }

  close() {
    if (this._client) {
      this._client.close();
    }
  }
};
