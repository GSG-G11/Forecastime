function getDate(str) {
    let data = str.split('T');
    let time = getTime(data[1]);
    let date = data[0];
    return { date, time };
}
function getTime(str) {
    let time = str.split('.')[0];
    return time
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

function gettemp(obj) {
    return obj.main.temp
}

const getWeatherStatus = (obj) => {
    let tempWether = obj.weather[0];
    return tempWether.main;
}

const getWeatherIcon = (obj) => {
    let tempWether = obj.weather[0];
    return tempWether.icon;
}
module.exports = {getWeatherIcon ,getWeatherStatus , gettemp};
