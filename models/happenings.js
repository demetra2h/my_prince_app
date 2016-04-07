var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var happeningSchema = new mongoose.Schema({
  whatsHappening:  { type: String, required: true },
  venue:           { type: String, required: true },
  city:            { type: String, required: true },
  state:           { type: String, required: true },
  date:            { type: Date,   required: true }
});

var Happening = mongoose.model('Happening', happeningSchema);

module.exports = Happening;
