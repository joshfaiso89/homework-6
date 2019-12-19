var apiKey = '4e5dbe7db2b5e9c8b47fa40b691443d5'; 
var cityURL = 'https://api.openweathermap.org/data/2.5/weather?appid=4e5dbe7db2b5e9c8b47fa40b691443d5&q=raleigh';
var fiveDay = 'https://api.openweathermap.org/data/2.5/forecast?4e5dbe7db2b5e9c8b47fa40b691443d5q={city name},{country code}';
var uvIndex = 'https://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}';



$('button').on('click', function(event){
  var input = $('input').val()
  console.log(input);
})


$(document).ready(function(){
  $.ajax({
    url: cityURL,
    method: "Get"
  }).then(function(data){
    console.log(data);
  })
})

