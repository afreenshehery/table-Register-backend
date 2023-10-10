"use strict";
let MongooseObj = require("mongoose").Mongoose;
//     config   = process.config.global_config.setup_information_mongodb;

let mongoose = new MongooseObj();

mongoose
  .connect(
    "mongodb+srv://afreenShehery:aR5hIMGkx9zynXKT@cluster0.pn6ipub.mongodb.net/tableBooking?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });
mongoose.Promise = global.Promise;

module.exports = mongoose;
