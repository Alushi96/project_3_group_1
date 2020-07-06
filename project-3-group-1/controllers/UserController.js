const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.user
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.user
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
      var newdata = req.body
      if (newdata.doctor === true)
      {
          newdata.type = "d"
      }
      else if
          (newdata.client === true){
              newdata = "c"
      }
      else 
          (newdata = err)
      

    db.user
      .create(newdata)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    var newdata = req.body
    if (newdata.doctor === true)
    {
        newdata.type = "d"
    }
    else if
        (newdata.client === true){
            newdata = "c"
    }
    else 
        (newdata = err)
    db.user
      .findOneAndUpdate({ _id: req.params.id }, newdata)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};