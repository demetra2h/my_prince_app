var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var showSchema = new mongoose.Schema({
  bandName:  { type: String, required: true },
  venue: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  date: { type: Date, required: true }
});

var Show = mongoose.model('Show', showSchema);

module.exports = Show;
