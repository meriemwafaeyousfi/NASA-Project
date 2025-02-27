import { api } from "./api";


const WeatherService = {
  /**
   * Fetches Mars weather data from the Mars Weather API.
   * @returns {Promise<object[]>} A promise that resolves to an array of weather data objects.
   */
  async getMarsWeather() {
    try {
      const response = await api.get(`mars-weather`);
      return response.data;
    } catch (error) {
      console.error("Error fetching mars weather:", error);
      throw error;
    }
  },
};
export default WeatherService;