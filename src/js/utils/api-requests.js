var request = require('superagent');
var AuthStore = require('../stores/auth');

var apiRequests = {
  get: function (url) {
    return request
      .get(url)
      .set('Accept', 'application/vnd.github.v3+json')
      .set('User-Agent', 'GitReleases.com')
      .set('Cache-Control', 'no-cache');
  }
};

module.exports = apiRequests;
