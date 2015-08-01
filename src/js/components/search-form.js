var React = require('react');

var SearchForm = React.createClass({
  render: function () {
    return (
      <div className='container search-form'>
        <div className='row'>

          <div className='col-md-offset-2 col-md-3'>
            <input className="form-control input-lg" type="text" placeholder="username" />
          </div>

          <div className='col-md-4'>
            <input className="form-control input-lg" type="text" placeholder="repository" />
          </div>

          <div className='col-md-1'>
            <button className='btn btn-lg btn-default btn-block'>Go!</button>
          </div>

        </div>
      </div>
    );
  }
});

module.exports = SearchForm;
