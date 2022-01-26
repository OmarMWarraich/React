import axios from 'axios';

const API_KEY = 'a58d68f69669a161f5c7578f667aa193';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?q=appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);



    return {
        type: 'FETCH_WEATHER',
        payload: request
    };
}