var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions/actions');
var RepositoryStore = require('../stores/repository');
var Release = require('../components/release');
var Asset = require('../components/asset');
var _ = require('underscore');

var Asset = React.createClass({
  render: function () {
    var assetSize = (parseInt(this.props.details.size) / 1000000).toFixed(2);

    return (
      <div className='asset'>
        <div className='col-md-10'>

          <ul className='list-inline'>
            <li>
              <span className='octicon octicon-file-zip'></span>
              {this.props.details.name}
            </li>

            <li>
              <span className='octicon octicon-file-zip'></span>
              {assetSize} mb
            </li>

            <li>
              <span className='octicon octicon-cloud-download'></span>
              <a href={this.props.details.browser_download_url} target='_blank'>Download Link</a>
            </li>
          </ul>

        </div>

        <div className='col-md-2 downloads'>
          <i className='fa fa-download' />
          {this.props.details.download_count}
        </div>
      </div>
    );
  }
});

module.exports = Asset;
