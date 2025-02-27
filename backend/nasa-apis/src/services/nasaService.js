const axios = require("axios");

const API_KEY = process.env.NASA_API_KEY;
const NASA_BASE_URL = "https://api.nasa.gov";


/**
 * Fetch Mars rover photos from NASA API.
 *
 * @param {String} rover - Mars rover name. Valid values are "curiosity", "opportunity", and "spirit".
 * @param {Number} [sol] - Martian sol (day) when photos were taken.
 * @param {String} [camera] - Camera name. Possible values are "fhaz", "rhaz", "mast", "chemcam", "mahli", "mardi", "navcam".
 * @param {String} [earth_date] - Date when photos were taken. Format is "YYYY-MM-DD".
 * @returns {Promise<Array<Object>>} Photos taken by the rover on the given date.
 */
const getMarsPhotos = async (rover, sol, camera, earth_date) => {
    let url = `${NASA_BASE_URL}/mars-photos/api/v1/rovers/${rover}/photos?api_key=${API_KEY}`;
    
    if (sol) url += `&sol=${sol}`;
    if (camera) url += `&camera=${camera}`;
    if (earth_date) url += `&earth_date=${earth_date}`;

    const response = await axios.get(url);
    return response.data.photos;
};


/**
 * Fetch Mars weather data from NASA API.
 *
 * @returns {Promise<Object>} The current Mars weather data.
 */
const getMarsWeather = async () => {
    const url = `${NASA_BASE_URL}/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;
    const response = await axios.get(url);
    return response.data;
};

module.exports = { getMarsPhotos, getMarsWeather };
