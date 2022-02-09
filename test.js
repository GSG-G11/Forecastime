let { getWeatherIcon, getWeatherStatus, gettemp } = require('./logic.js');


let weatherData1 = {
    weather: [{
        "id": 800,
        "main": "Clear",
        "icon": "01d"
    }],
    "main": {
        "temp": 281.34,
    },
};
let weatherData2 = {
    weather: [{
        "id": 803,
        "main": "Clouds",
        "icon": "04d"
    }],
    "main": {
        "temp": 250.34,
    },
}
let weatherData3 = {
    weather: [{
        "id": 803,
        "main": "Clouds",
        "icon": "04n"
    }],
    "main": {
        "temp": 310.34,
    },
}
describe('test the logic wither functions', () => {
    // ---------------- Weather Icon ----------------- //
    test('test getWeatherIcon case 1', () => {
        expect(getWeatherIcon(weatherData1)).toBe("01d");
    });
    test('test getWeatherIcon case 2', () => {
        expect(getWeatherIcon(weatherData2)).toBe("04d");
    });
    test('test getWeatherIcon case 3', () => {
        expect(getWeatherIcon(weatherData3)).toBe("04n");
    });
    // ---------------- Weather Status ----------------- //
    test('test getWeatherStatus case 1', () => {
        expect(getWeatherStatus(weatherData1)).toBe("Clear");
    });
    test('test getWeatherStatus case 2', () => {
        expect(getWeatherStatus(weatherData2)).toBe("Clouds");
    });
    test('test getWeatherStatus case 3', () => {
        expect(getWeatherStatus(weatherData3)).toBe("Clouds");
    });
    // ---------------- Weather Tempreature ----------------- //
    test('test gettemp case 1', () => {
        expect(gettemp(weatherData1)).toBe(281.34);
    });
    test('test gettemp case 2', () => {
        expect(gettemp(weatherData2)).toBe(250.34);
    });
    test('test gettemp case 3', () => {
        expect(gettemp(weatherData3)).toBe(310.34);
    });
});


