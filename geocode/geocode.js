const request = require('request');

const GOOGLE_API_KEY = '';

const geocodeAddress = (address, callback) => {
  request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    method: 'GET',
    qs: {
      key: GOOGLE_API_KEY,
      address: address,
      language: 'en'
    },
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Google servers.');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address.');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    } else {
      callback('Google API error:'
              +`\nResponse Status Code: ${response.statusCode}`
              +`\nRequest Status: ${body.status}`
              +`\nError Message: ${body.error_message}`);
    }
  });
};

module.exports.geocodeAddress = geocodeAddress;
