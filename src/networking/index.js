import Axios from 'axios';
import { apiKey } from '../utils/constants';

const APITimeout = 60000;

const baseUrl = 'https://coronavirus-monitor.p.rapidapi.com/';

//By country, by date
export const getDataByCountryAndDate = 'coronavirus/history_by_particular_country_by_date.php';

//By country
export const getDataByCountry = 'coronavirus/cases_by_particular_country.php';

//Latest stat by county
export const latestStatByCountry = 'coronavirus/latest_stat_by_country.php';

const contentTypeHeaders = {
  'content-type': 'application/octet-stream',
  'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
  'x-rapidapi-key': apiKey,
};

export const unAuthAxios = (method, url, params) =>
  Axios.request({
    method: method,
    baseURL: baseUrl,
    url: url,
    timeout: APITimeout,
    headers: contentTypeHeaders,
    params: params,
  });
