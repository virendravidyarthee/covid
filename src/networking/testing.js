const axios = require('axios');
const moment = require('moment');

/* axios({
  method: 'GET',
  url: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/history_by_country_and_date.php',
  headers: {
    'content-type': 'application/octet-stream',
    'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
    'x-rapidapi-key': '5aa871fb55msha1efb1e49628ad0p15ec67jsn429c11038010',
  },
  params: {
    country: 'india',
    date: '2020-03-17',
  },
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
 */

const getLastWeekArray = () => {
  return Array.from({ length: 8 }, (_, i) => {
    return moment().subtract(i, 'days');
  });
};

console.log(getLastWeekArray());
