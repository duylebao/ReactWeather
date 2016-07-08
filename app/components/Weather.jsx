var React = require('react');
var WeatherForm = require('WeatherForm')
var WeatherMessage = require('WeatherMessage')
var openWeathermap = require('openWeathermap')

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading : false
    }
  },
  handleSearch: function(location){
    var that = this;
    this.setState({
      isLoading : true
    })
    openWeathermap.getTemp(location)
      .then(function(temp){
        that.setState({
          location: location,
          temp: temp,
          isLoading : false
        })
      }, function(errMessage){
        that.setState({
          isLoading : false
        })
        alert(errMessage);
      });
  },
  render: function(){
    var {isLoading, location,temp} = this.state;

    function renderMessage(){
      if (isLoading){
        return <h3>Fetching weather...</h3>;
      }else if (location && temp){
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }
    return (
      <div>
        <h2>Weather Component</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather
