const { MongoClient } = require("mongodb");
const img = require("");
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);

const start = async () => {
  try {
    // Подключаемся к серверу
    await mongoClient.connect();
    // взаимодействие с базой данных
    let db = mongoClient.db("mongo");
    let users = db.collection("users");
    await users.insertOne({
      name: "Rick2",
      age: 72,
    });
    const findResult = await users.find({}).toArray();
    console.log(findResult);
  } catch (err) {
    console.log(err);
  } finally {
    // Закрываем подключение при завершении работы или при ошибке
    await mongoClient.close();
  }
};
start();
