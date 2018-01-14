var express = require("express");
var router = express.Router();
var burger = require("../models");

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  db.Burger.findAll({
    include: [db.Customer],
    order: [
      "burger_name, ASC"
    ]
  }).then(function(result){
    var hbsObject = {
      burger: result
    };
    return res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name
  }).then(function(result){
    return res.redirect("/burgers");
  });
});

router.post("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  if (req.body.customer){
    db.Customer.create({
      customer: req.body.customer,
      BurgerId: req.body.burger_id
    }).then(function(result){
      return db.Burger.update({
          devoured: true
        }, {
          where: {
            id: req.body.burger_id
          }
        });
      }).then(function(result){
      res.redirect("/burgers");
    });
  } else {
    db.Burger.update({
      devoured: true
    }, {
      where: {
        id: req.body.burger_id
      }
    }).then(function(result){
      res.redirect("/burgers")
    });
  }
});

module.exports = router;
