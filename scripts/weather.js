const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=2816aaa25ff1a8b7bfc46a3edae796f7';

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch(error) {
        console.log(error);
    }
}
apiFetch();


function displayResults(data){
    let tem = Math.round(data.main.temp);

    currentTemp.innerHTML = `${tem}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png `;
    let desc = data.weather[0].icon;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", `weather icon` );
    captionDesc.textContent = `${desc}`;
}