const mongoose = require("mongoose");

(async () => {
  try {
    mongoose.set("strictQuery", true);
    const db = await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB is connected to", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
