const MongoClient = require("mongodb").MongoClient;

module.exports = class DB {
  url = "mongodb://localhost:27017";
  options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
  db_name = process.env.DB_NAME || "test";

  /**
   * @var MongoClient
   */
  _client;

  constructor() {
    this._client = null;
  }

  /**
   * Db instanceはキャッシュ化されて同一のinstanceが返る
   * @see http://mongodb.github.io/node-mongodb-native/3.1/api/MongoClient.html#db
   */
  async getDB() {
    if (!this._client) {
      try {
        this._client = await new MongoClient.connect(this.url, this.options);
      } catch (err) {
        console.error(err);
        throw new Error(err);
      }
    }
    return this._client.db(this.db_name);
  }

  async getCollection(collection_name) {
    const db = await this.getDB();
    return db.collection(collection_name);
  }

  close() {
    if (this._client) {
      this._client.close();
    }
  }
};
