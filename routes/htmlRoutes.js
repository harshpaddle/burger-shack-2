
const Burgers = require("../models/").Burgers;

module.exports = (app) => {

  app.get("/", function(req, res) {

    Burgers.findAll()
      .then(dbBurgerData => {
        res.render("index", {burgerData: dbBurgerData})
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}