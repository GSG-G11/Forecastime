let { getWeatherIcon, getWeatherStatus, gettemp , getTime , getDate} = require('./logic.js');


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
describe('test the logic weather functions', () => {
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


// ------------------------- Time --------------------------------- //


describe('test the logic Time functions', () => {
    test('test getDate case 1', () => {
        expect(getDate("2022-02-09T11:45:50.055472+02:00")).toEqual({date: '2022-02-09', time: '11:45:50'});
    });
    test('test getDate case 2', () => {
        expect(getDate("2022-02-09T09:59:03.208962+00:00")).toEqual({date: '2022-02-09', time: '09:59:03'});
    });
    test('test getDate case 3', () => {
        expect(getDate("2022-02-09T14:00:59.505075+04:00")).toEqual({date: '2022-02-09', time: '14:00:59'});
    });

});


