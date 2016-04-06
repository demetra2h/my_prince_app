var Shmee = require("../models/shows");

// get the show!
var shmeeShow = function(req, res, next){
  var id = req.params.id;

  Schmee.findById(id, function(err, schmee){
    if err {
      res.send(err);
    }
// gimme it as json!
    res.json(schmee);
  });
};

// get the shows!
var schmeeIndex = function(req, res) {
  Schmee.find({}, function(err, schmees) {
    if (err) {
      res.send(err);
    }
// i still want schmee as json!
    res.json(schmees);
  });
}

// create shows!
var schmeeCreate = function(req, res) {
  var schmee = new Schmee();

  schmee.bandName = req.body.bandName;
  schmee.venue    = req.body.venue;
  schmee.city     = req.body.city;
  schmee.state    = req.body.state;
  schmee.date     = req.body.date;

  schmee.save(function(err, savedSchmee)
  {
    if err {
      res.send(err)
    }

  // gimme a message
    console.log("look at that schmee!")

  // i want it as json, duh!
    res.json(savedSchmee);
  });
};

// update a show
var schmeeUpdate = function(req, res) {
  var id = req.params.id;

  Schmee.findById(id, function(err, schmee) {

    if (err) {
      res.send(err);
    }

// setting the new info for the show
    if (req.body.bandName) schmee.bandName = req.body.bandName;
    if (req.body.venue) schmee.venue = req.body.venue;
    if (req.body.city) schmee.city = req.body.city;
    if (req.body.state) schmee.state = req.body.state;
    if (req.body.date) schmee.date = req.body.date;

    // save the new info
    schmee.save(function(err, updatedSchmee) {
      if (err) {
        res.send(err);
      }

      console.log("you changed the show!");

      res.json(updatedSchmee);
    });
  });
}

// delete the show
var schmeeDelete = function(req, res) {

  var id = req.params.id;

  schmee.remove({"_id" : id} function(err) {
    if (err) {
      res.send(err;)
    }

    res.json({ message: "that show is gone!" });
  });
}

// export the functions, with json
module.exports = {
  schmeeSchow:  schmeeSchow,
  schmeeIndex:  schmeeIndex,
  schmeeCreate: schmeeCreate,
  schmeeUpdate: schmeeUpdate,
  schmeeDelete: schmeeDelete
}
