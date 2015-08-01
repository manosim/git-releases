var React = require('react');

var SearchForm = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <div className='row'>

          <div className='col-xs-offset-2 col-xs-3'>
            <input className="form-control input-lg" type="text" placeholder="username" />
          </div>

          <div className='col-xs-3'>
            <input className="form-control input-lg" type="text" placeholder="repository" />
          </div>

          <div className='col-xs-3'>
            <button className='btn btn-lg'>Show me some releases</button>
          </div>

        </div>
      </div>
    );
  }
});

module.exports = SearchForm;
