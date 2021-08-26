const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// mongoose.connect("mongodb://localhost:27017/test", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const CampgroundSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,
  description: String,
  location: String,
});

module.exports = mongoose.model("Campground", CampgroundSchema);
