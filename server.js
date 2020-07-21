const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.set('useCreateIndex', true)
mongoose.connect(process.env.MONGODB_URI || "mongodb://user:A123456@ds031965.mlab.com:31965/heroku_wx4nzw9t", { useNewUrlParser: true, useUnifiedTopology: true });
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);

});