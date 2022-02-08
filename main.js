const cityWeather = document.querySelector('.cityWeather');
const timeZoon = document.querySelector('.timeZoon');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('#search-btn');
const continents = document.querySelector('#continents');

searchBtn.addEventListener('click' , (event)=>{
    event.preventDefault();
    let city = searchInput.value;
    let continent = continents.value;
    if(city){
        let url = `http://worldtimeapi.org/api/timezone/${continent}/${city}`
        fetch(url , (data)=>{updateWeatherDom(timeZoon,data)});
    }
    else{
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
            }else if(xhr.status === 404){
                faild(timeZoon,cityWeather)
            }
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
}
let url = 'http://worldtimeapi.org/api/timezone/Asia/Gaza';
fetch(url,(data)=>{updateWeatherDom(timeZoon,data)})

function getDate(str){
    let data = str.split('T');
     let time = getTime(data[1]);
     let date = data[0];
    return {date , time};
}
function getTime(str){
    let tempTime = str.split('T')[1];
    let time = str.split('.')[0];
    return time
}
function updateWeatherDom(html,data){
    let date = getDate(data.datetime);
    html.innerHTML = `${date.time} , ${date.date}`
}
function faild(time , weather){
    time.innerHTML = `sorry city not found`
    weather.innerHTML = `sorry city not found`
}
