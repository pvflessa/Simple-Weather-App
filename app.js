//Init Storage object

const storage = new Storage()

//Get location from localStorage

const weatherLocation = storage.getLocationData()


//Init weather object

const weather = new Weather(weatherLocation.city)


//Init ui object

const ui = new UI()







//Get weather on DOM load

document.addEventListener('DOMContentLoaded',getWeather)

//Change Location

document.querySelector('#w-change-btn').addEventListener('click',function(e){
  city = document.querySelector('#city').value



  weather.changeLocation(city)
  getWeather()

  //Close modal

  $('#locModal').modal('hide')

  //Store new location into localStorage
  storage.setLocationData(city)
})



function getWeather(){
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
