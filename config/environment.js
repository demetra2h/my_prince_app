var _ = require('lodash');

var localEnvVars = {
  TITLE:      'my_prince_app',
  SAFE_TITLE: 'my_prince_app'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
