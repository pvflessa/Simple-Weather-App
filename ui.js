
class UI{
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');

    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = Math.round(weather.main.temp - 273.15 )+ "°C " ;

    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
  
    this.wind.textContent = `Wind: ${weather.wind.speed}`;
let iconSrc="http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png"
    this.icon.innerHTML = `<img src="${iconSrc}">`
  }
}
