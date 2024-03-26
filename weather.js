const APIKEY = 'e3af3bd8ca7248a881c121216242503';


const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');


// referencing output fields
const cityName = document.getElementById('city-name');
const countryName = document.getElementById('countryName')
const localTime= document.getElementById('loc-time');
const temp = document.getElementById('temp')
const sup = document.getElementById('sup')



async function getData(KYE, cityName){
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${cityName}&aqi=yes`);
    return await promise.json();
}

searchBtn.addEventListener('click', async ()=>{
    const input = cityInput.value;
    document.getElementById('outputCard').style.visibility ='visible';
    const result = await getData( APIKEY,input);
    cityName.innerText =  ` ${result.location.name}, ${result.location.region}`
    countryName.innerText = `${result.location.country}`
    temp.innerText = `${result.current.temp_c}`;
    sup.innerText = '°C'
    localTime.innerText = `${result.location.localtime}`;

     if (result.current.temp_c > 30) {
        document.body.style.backgroundImage= "url('/summer.jpg')";
    } else if (result.current.temp_c < 20) {
        document.body.style.backgroundImage = "url('/winter.jpg')";
    } else {
        // Default background image if temperature is between 10 and 30
        document.body.style.backgroundImage = "url('default.jpg')";
    }
  
})

