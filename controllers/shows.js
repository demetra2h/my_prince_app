var Show = require("../models/shows");

// get the show!
var showShow = function(req, res, next){
  var id = req.params.id;

  Show.findById(id, function(err, show){
    if (err) {
      res.send(err);
    }
// gimme it as json!
    res.json(show);
  });
};

// get the shows!
var showIndex = function(req, res) {
  Show.find({}, function(err, shows) {
    if (err) {
      res.send(err);
    }
// i still want show as json!
    res.json(shows);
  });
}

// create shows!
var showCreate = function(req, res) {
  var show = new Show();

  show.bandName = req.body.bandName;
  show.venue    = req.body.venue;
  show.city     = req.body.city;
  show.state    = req.body.state;
  show.date     = req.body.date;

  show.save(function(err, savedShow)
  {
    if (err) {
      res.send(err)
    }

  // gimme a message
    console.log("look at that show!")

  // i want it as json, duh!
    res.json(savedShow);
  });
};

// update a show
var showUpdate = function(req, res) {
  var id = req.params.id;

  Show.findById(id, function(err, show) {

    if (err) {
      res.send(err);
    }

// setting the new info for the show
    if (req.body.bandName) show.bandName = req.body.bandName;
    if (req.body.venue)    show.venue    = req.body.venue;
    if (req.body.city)     show.city     = req.body.city;
    if (req.body.state)    show.state    = req.body.state;
    if (req.body.date)     show.date     = req.body.date;

    // save the new info
    show.save(function(err, updatedShow) {
      if (err) {
        res.send(err);
      }

      console.log("you changed the show!");

      res.json(updatedShow);
    });
  });
}

// delete the show
var showDelete = function(req, res) {

  var id = req.params.id;

  Show.remove({"_id" : id}, function(err) {
    if (err) {
      res.send(err);
    }

    res.json({ message: "that show is gone!" });
  });
}

// export the functions, with json
module.exports = {
  showShow:   showShow,
  showIndex:  showIndex,
  showCreate: showCreate,
  showUpdate: showUpdate,
  showDelete: showDelete
}
