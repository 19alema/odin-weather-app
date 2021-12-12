
const date = document.querySelector(".date")
const windInfo = document.querySelector(".wind");
const humidityInfo = document.querySelector(".humidity");
const pressureInfo = document.querySelector(".pressure");
const tempInfo = document.querySelector(".temp-display");
const city = document.querySelector(".city-name")
const button = document.querySelector(".btn");
const celicius = document.querySelector(".celicius")
const inputFiled = document.querySelector(".input-city");
const fereheint = document.querySelector(".fereheint")
const paraWarning = document.querySelector(".para")
inputFiled.addEventListener("click", function (e) {
   e.preventDefault()
})

button.addEventListener("click", fetchWeatherInfo)

 async function fetchWeatherInfo() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputFiled.value}&units=metric&appid=28fe7b5f9a78838c639143fc517e4343`
    try {
       
       let response = await fetch(url, {
          mode: 'cors'
       });
       if (!response.ok) {
           paraWarning.innerText = `${inputFiled.value} does not exist`
       }else {
       let weatherData = await response.json()
          updateWeatherInfoOfCity(weatherData);
          paraWarning.innerText = ""
      }
    } catch (error) {
   
   }
   
}


function updateWeatherInfoOfCity(obj) {
  
   city.innerText = `${obj.name}, ${obj.sys.country}`;
   windInfo.innerText = `${obj.wind.speed} km/hr`
   humidityInfo.innerText = `${obj.main.humidity}%`;
  
  
      tempInfo.innerText = `${obj.main.temp}`


   celicius.addEventListener("click", function () {
      let temp = obj.main.temp;
      tempInfo.innerText= ((temp - 32) / 1.8).toFixed(2)
   })

   fereheint.addEventListener("click", function () {
       let temp = obj.main.temp;
      tempInfo.innerText = ((temp * 1.8) + 32).toFixed(2)
   })
   pressureInfo.innerText = `${obj.main.pressure} Pa`;
}


function todaysDate() {
   let today = new Date()
 let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
   let day = days[today.getDay()]
   let months = [
      'Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
   ]
   let month = months[today.getMonth()]
   let dayToday = today.getDate()
   let year = today.getFullYear();

   date.innerText = `${dayToday},${month} ${year}`

}
todaysDate()