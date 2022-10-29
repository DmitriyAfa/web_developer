const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);

const start = async () => {
  try {
    // Подключаемся к серверу
    await mongoClient.connect();
    // взаимодействие с базой данных
    let db = mongoClient.db("mongo");

    let users = db.collection("users");
    const findResult = await users.find({}).toArray();
    console.log("Found documents =>", findResult);
  } catch (err) {
    console.log(err);
  } finally {
    // Закрываем подключение при завершении работы или при ошибке
    await mongoClient.close();
  }
};
start();
