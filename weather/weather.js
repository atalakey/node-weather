const request = require('request');

const SECRET_KEY = '';

const getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${SECRET_KEY}/${lat},${lng}`,
    method: 'GET',
    qs: {
      exclude: 'minutely,hourly,daily,alerts,flags',
      lang: 'en',
      units: 'si'
    },
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Dark Sky servers.');
    } else if (response.statusCode !== 200) {
      callback('Unable to fetch weather.');
    } else {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports.getWeather = getWeather;
