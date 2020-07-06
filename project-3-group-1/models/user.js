const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Email: { type: String, unique: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"],required: true },
  Name: { type: String, required: true },
  Surname: { type: String, required: true },
  PhoneNumber: { type: Number, required: true },
  DOB: { type: Number, required: true },
  Adress: { type: String, required: true },
  type: { type: String, required: true },
  synopsis: String,
});

const user = mongoose.model("user", userSchema);

module.exports = user;