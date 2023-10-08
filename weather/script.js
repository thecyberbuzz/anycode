const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5c2ad51cc7mshb4d5a1ca7abe68fp1316e0jsnaeed0a0e9a5f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather= (city)=>{
    if(city.lenght()===0) return;
    cityName.innerHTML=city;
    

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
                    console.log(response)

                    
                    feels_like2.innerHTML = response.feels_like 
                    humidity2.innerHTML = response.humidity 
                    wind_speed2.innerHTML = response.wind_speed
                    wind_degrees.innerHTML = response.wind_degrees

    
    })
    .catch(err=> console.error(err))
}

search.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

let hit = document.getElementById("city")
let srh= document.getElementById("search")

window.addEventListener("keydown",(e)=>{
  
    if(e.key === 'Enter'){
    getWeather(city.value)
    }
})

getWeather("durgapur")

function preventNumberInput(e){
    let keyCode=(e.keyCode ? e.keyCode : e.which);
    if(keyCode>47 && keyCode<58 || keyCode>95 && keyCode<107 || keyCode===32){
        e.preventDefault();
    }
}

