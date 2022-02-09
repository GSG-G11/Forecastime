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
module.exports = {getWeatherIcon ,getWeatherStatus , gettemp , getTime , getDate};
