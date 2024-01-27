const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectionString = process.env.CONNECTION_STRING;
// console.log("MongoDB URI:", connectionString);

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));
