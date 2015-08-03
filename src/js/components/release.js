var React = require('react');
var Reflux = require('reflux');
var Markdown = require('react-remarkable');

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
          <div className='row'>
            <div className='col-sm-7'>
              <h3>
                <a href={this.props.details.html_url} target='_blank'>{this.props.details.name}</a>
              </h3>
            </div>
            <div className='col-sm-5'>
              <ul className='list-inline'>
                <li>
                  <i className='fa fa-calendar-o' />
                  {this.parseDate()}
                </li>
                <li>
                  <span className='octicon octicon-tag'></span>
                  {this.props.details.tag_name}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='row'>
          {assets}
          <div className='col-md-12'>
            {this.props.details.prerelease ?
              <div>
                <span className='label label-warning'>Prerelease</span></div>
            : null }

            <Markdown source={this.props.details.body} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Release;
