const apiKey="9bd44b878e4910e5beb07acc2e1cd568";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const resetbtn=document.querySelector(".reset");
async function checkweather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    let data=await response.json();//Javascript Object Notation

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/hr";

if(data.weather[0].main=="Clouds"){
    document.querySelector(".weather-icon").src="images/clouds.png";
}
else if(data.weather[0].main=="Clear"){
    document.querySelector(".weather-icon").src="images/clear.png";
}
else if(data.weather[0].main=="Drizzle"){
    document.querySelector(".weather-icon").src="images/drizzle.png";
}
else if(data.weather[0].main=="Mist"){
    document.querySelector(".weather-icon").src="images/mist.png";
}
else if(data.weather[0].main=="Rain"){
    document.querySelector(".weather-icon").src="images/rain.png";
}
else if(data.weather[0].main=="Snow"){
    document.querySelector(".weather-icon").src="images/snow.png";
}
document.querySelector(".weather").style.display="Block";
}
searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
})
resetbtn.addEventListener("click",()=>{
    document.querySelector(".weather").style.display="none";
    // let b=document.getElementById("re");
    // b.textContent=" ";
})