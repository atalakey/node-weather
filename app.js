const request = require('request');
const yargs = require('yargs');

const GOOGLE_API_KEY = '';

const argv = yargs
  .options({
    address: {
      alias: 'a',
      demand: true,
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json',
  method: 'GET',
  qs: {
    key: GOOGLE_API_KEY,
    address: argv.address,
    language: 'en'
  },
  json: true
}, (error, response, body) => {
  if (error) {
    console.log('Unable to connect to Google servers.');
  } else if (body.status === 'ZERO_RESULTS') {
    console.log('Unable to find that address.');
  } else if (body.status === 'OK') {
    console.log('Address:', body.results[0].formatted_address);
    console.log('Latitude:', body.results[0].geometry.location.lat);
    console.log('Longitude:', body.results[0].geometry.location.lng);
  } else {
    console.log('Google API error:'); 
    console.log('Server Status Code:', response.statusCode); 
    console.log('Request Status:', body.status); 
    console.log('Error Message:', body.error_message); 
  }
});
