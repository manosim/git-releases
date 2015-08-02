var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions/actions');
var RepositoryStore = require('../stores/repository');
var Release = require('../components/release');
var Asset = require('../components/asset');
var _ = require('underscore');

var Release = React.createClass({
  mixins: [
    Reflux.connect(RepositoryStore, 'releases')
  ],

  getInitialState: function () {
    return {
      releases: []
    };
  },

  parseDate: function () {
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    var dateFormat = new Date(this.props.details.published_at);
    return dateFormat.getDate() + ' ' + monthNames[dateFormat.getMonth()];
  },

  render: function () {
    var assets;

    if (this.props.details.assets) {
      assets = (
        _.map(this.props.details.assets, function (obj) {
          return <Asset details={obj} key={obj.id} />;
        })
      );
    }

    return (
      <div className='release'>
        <div className='page-header'>
          <h3>
            <a href={this.props.details.html_url} target='_blank'>{this.props.details.name}</a>

            <ul className='list-inline pull-right'>
              <li>
                <i className='fa fa-calendar-o' />
                {this.parseDate()}
              </li>
              <li>
                <span className='octicon octicon-tag'></span>
                {this.props.details.tag_name}
              </li>
            </ul>
          </h3>
        </div>
        <div className='row'>
          {assets}
          <div className='col-md-12'>
            {this.props.details.prerelease ?
              <div>
                <span className='label label-warning'>Prerelease</span></div>
            : null }

            <pre>
              {this.props.details.body ? this.props.details.body : 'No description available' }
            </pre>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Release;
