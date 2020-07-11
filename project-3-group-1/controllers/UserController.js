const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
    db.Dcdashboard
      .find(req.query)
      .then(dbModel => res.json(dbModel))
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel)) 
    db.Dcdashboard
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))   
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
          newdata = "err"
      

    db.User
      .create(newdata)
      .then(dbModel => res.json(dbModel))
    db.Dcdashboard
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      
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
        newdata = "err"
    db.User
      .findOneAndUpdate({ _id: req.params.id }, newdata)
      .then(dbModel => res.json(dbModel))
      
    db.Dcdashboard
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      
  },
 
};