var Happening = require("../models/happenings");

// get the happening!
var happeningShow = function(req, res, next){
  var id = req.params.id;

  Happening.findById(id, function(err, happening){
    if (err) {
      res.send(err);
    }
// gimme it as json!
    res.json(happening);
  });
};

// get the happenings!
var happeningIndex = function(req, res) {
  Happening.find({}, function(err, happenings) {
    if (err) {
      res.send(err);
    }
// i still want happening as json!
    res.json(happenings);
  });
}

// create happenings!
var happeningCreate = function(req, res) {
  var happening = new Happening();

  happening.bandName = req.body.bandName;
  happening.venue    = req.body.venue;
  happening.city     = req.body.city;
  happening.state    = req.body.state;
  happening.date     = req.body.date;

  happening.save(function(err, savedHappening)
  {
    if (err) {
      res.send(err)
    }

  // gimme a message
    console.log("look at that happening!")

  // i want it as json, duh!
    res.json(savedHappening);
  });
};

// update a happening
var happeningUpdate = function(req, res) {
  var id = req.params.id;

  Happening.findById(id, function(err, happening) {

    if (err) {
      res.send(err);
    }

// setting the new info for the happening
    if (req.body.bandName) happening.bandName = req.body.bandName;
    if (req.body.venue)    happening.venue    = req.body.venue;
    if (req.body.city)     happening.city     = req.body.city;
    if (req.body.state)    happening.state    = req.body.state;
    if (req.body.date)     happening.date     = req.body.date;

    // save the new info
    happening.save(function(err, updatedHappening) {
      if (err) {
        res.send(err);
      }

      console.log("you changed the happening!");

      res.json(updatedHappening);
    });
  });
}

// delete the happening
var happeningDelete = function(req, res) {

  var id = req.params.id;

  Happening.remove({"_id" : id}, function(err) {
    if (err) {
      res.send(err);
    }

    res.json({ message: "that happening is gone!" });
  });
}

module.exports = {
  happeningShow:   happeningShow,
  happeningIndex:  happeningIndex,
  happeningCreate: happeningCreate,
  happeningUpdate: happeningUpdate,
  happeningDelete: happeningDelete
};
