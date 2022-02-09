const cityWeather = document.querySelector('.cityWeather');
const timeZoon = document.querySelector('.timeZoon');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('#search-btn');
const continents = document.querySelector('#continents');
const statusImg = document.querySelector('.status');

const updataDom = (continent, city) => {
    let url = `https://worldtimeapi.org/api/timezone/${continent}/${city}`;
    let url2 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=40a49d0dc4473613c25717d66db17c09`
    fetch(url, (data) => { updateTimeDom(timeZoon, data) });
    fetch(url2, (data) => { updateWeatherDom(cityWeather, data) });
}
updataDom('asia','gaza');

searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let city = searchInput.value;
    let continent = continents.value;
    if (city) {
        updataDom(continent,city );
    }
    else {
        alert('Please enter city name')
    }
});

function fetch(url, cb) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                cb(data);
            } else if (xhr.status === 404) {
                faild(timeZoon, cityWeather)
            }
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
}

function updateTimeDom(html, data) {
    let date = getDate(data.datetime);
    html.innerHTML = `${date.time} , ${date.date}`

}
function updateWeatherDom(html, data) {
    let temp = Math.floor(gettemp(data) - 273.15);
    let status = getWeatherStatus(data);
    html.innerHTML = `${temp} °C  , ${status}`;
    let icon = getWeatherIcon(data)
    statusImg.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
}
function faild(time, weather) {
    time.innerHTML = `sorry city not found`
    weather.innerHTML = `sorry city not found`
}