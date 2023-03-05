const weather = document.querySelector("#weather span:first-child")
const city = document.querySelector("#weather span:last-child")
const API_KEY = "00fad5547aed3af928e150ee85bdc07f"

function onGeoOk(position){
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url)
	.then((respones) => respones.json())
	.then((data) =>{
		city.innerText = data.name;
		weather.innerText = `${data.weather[0].main} / ${data.main.temp} °C`;
	});
	
}

function onGeoError(){
	alert("Can't find you, No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
