//global variables
var apiKey = '4e5dbe7db2b5e9c8b47fa40b691443d5'; 
var city = 'raleigh'; 
var currentConditions = 'https://api.openweathermap.org/data/2.5/weather?appid='; 
var fiveDay = 'https://api.openweathermap.org/data/2.5/forecast?4e5dbe7db2b5e9c8b47fa40b691443d5q={city name},{country code}';
var uvIndex = 'https://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}';
var searchedArr = JSON.parse(localStorage.getItem('searchedItems')) || [];

//taking in user input, and passing the value into a variable
$(document).ready(function(){
  $('#search-input').on('click', function (event){
    var userInput = $('#city-search').val();
    console.log(userInput);
    getWeather(userInput);
  })
})

function getWeather(cityName){
  var apiCall = '';

  if (cityName !== ''){ 
    apiCall = currentConditions + apiKey + '&q=' + cityName; 
    //return apiCall;
  } else {
    apiCall = currentConditions + apiKey + '&q=' + city; 
    //return apiCall;
  }

  $.ajax({
    url: apiCall,
    method: "Get"
  }).then(function(response){
    console.log(response);
    var feelslike = response.main.feels_like; 
    $('#current-weather').append('<div>' + feelslike + '</div>');

  })
}
    











      
  





