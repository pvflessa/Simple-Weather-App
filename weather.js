
class Weather {
  constructor(city) {
    this.apiKey = '1b9025b3e3cbf737fb2cd3d7e8a945f1';
    this.city = city;

  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;

  }
}
