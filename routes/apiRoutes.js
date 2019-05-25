// import our burgers model
const Burgers = require("../models/burgers");

module.exports = app => {

  // GET all burgers
  app.get("/api/burgers", function(req, res) {
    Burgers.findAll()
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // create/POST a new cat
  app.post("/api/burgers", function(req, res) {
    // pass req.body into create method 
    // req.body => {name: "catty cat"}
    Burgers.create(req.body)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });



  app.get("/api/burgers/:id", function(req, res) {
    Burgers.findAll({
      where: {
        id: req.params.id
      }
    }).then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err)
      })
  });

  // PUT/update a cat's sleepy to true/false by id
  app.put("/api/burgers/:id", function (req, res) {
    
  })
  // app.put("/api/burgers/:id", function(req, res) {
  //   // req.body => {sleepy: true} || {sleepy : false}
  //   burgers.update(req.body.devoured, req.params.id)
  //     .then(dbBurgerData => res.json(dbBurgerData))
  //     .catch(err => {
  //       console.log(err);
  //       res.json(err);
  //     });
  // });

  // DELETE a cat by its id
  app.delete("/api/burgers/:id", function(req, res) {
    burgers.remove(req.params.id)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}
