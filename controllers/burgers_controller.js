var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
  res.redirect("/burger");
});

router.get("/burger", function(req, res) {
  db.Burgers.findAll({
    include: [db.Customers],
    order: [
      ["burger_name", "ASC"]
    ]
  })
  .then(function(dbBurger) {
    var hbsObject = {
      burger: dbBurger
    };
    res.render("index", hbsObject);
  });
});

router.post("/burger/create", function(req, res) {
  db.Burgers.create({
    burger_name: req.body.burger_name,
    devoured: false
  }).then(function() {
    res.redirect("/burger");
  });
});

router.put("/burger/update", function(req, res) {
  console.log(req.body.customer);
  if (req.body.customer) {
    db.Customers.create({
      customer: req.body.customer,
      BurgerId: req.body.burger_id
    })
    .then(function(dbCustomer) {
      db.Burgers.update({
        devoured: true
      }, {
        where: {
          id: req.body.burger_id
        }
      });
    })
    .then(function(dbBurger) {
      res.redirect("/burger");
    });
  }
  else {
    db.Burgers.update({
      devoured: true
    }, {
      where: {
        id: req.body.burger_id
      }
    })
    .then(function(dbBurger) {
      res.redirect("/burger");
    });
  }
});

module.exports = router;
