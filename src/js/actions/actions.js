var Reflux = require('reflux');

var Actions = Reflux.createActions({

  'getReleases': {asyncResult: true}

});

module.exports = Actions;
