var request = require('superagent');

var apiRequests = {
  get: function (url) {
    return request
      .get(url)
      .set('Accept', 'application/vnd.github.v3+json')
      .set('User-Agent', 'GitReleases.com');
  }
};

module.exports = apiRequests;
