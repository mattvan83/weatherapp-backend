const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectionString =
  "mongodb+srv://admin:lEi8gAghhS0hci5e@cluster0.3lphr5o.mongodb.net/weatherapp";

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));
