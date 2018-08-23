const yargs = require('yargs');
const axios = require('axios');

const GOOGLE_API_KEY = '';
const DARK_SKY_API_SECRET_KEY = '';

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

axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
  params: {
    key: GOOGLE_API_KEY,
    address: argv.address,
    language: 'en'
  },
  responseType: 'json'
}).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address.');
  } else if (response.data.status !== 'OK') {    
    throw new Error('Google API error:'
    +`\nHTTP Status Code: ${response.status}`
    +`\nRequest Status: ${response.data.status}`
    +`\nError Message: ${response.data.error_message}`); 
  }

  console.log(response.data.results[0].formatted_address);

  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  return axios.get(`https://api.darksky.net/forecast/${DARK_SKY_API_SECRET_KEY}/${lat},${lng}`, {
    params: {
      exclude: 'minutely,hourly,daily,alerts,flags',
      lang: 'en',
      units: 'si'
    },
    responseType: 'json'
  });
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
}).catch((error) => {
  if (error.code === 'ENOTFOUND') {
    console.log('Unable to connect to API servers.');
  } else {
    console.log(error.message);
  }
});
