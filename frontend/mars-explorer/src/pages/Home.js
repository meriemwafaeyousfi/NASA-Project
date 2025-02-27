import "primereact/resources/primereact.min.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "primereact/skeleton";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Hero from "../components/Hero";
import WeatherCard from "../components/WeatherCard";
import { rovers } from "../data/data";
import WeatherService from "../services/WeatherService";
import { formatDate } from "../utils/date_utils";
import RoverCard from "../components/RoverCard";

/**
 * Home component that displays the main page of the application.
 * It fetches and displays Mars weather data including temperature, wind speed,
 * and pressure, as well as a list of Mars rovers. It provides navigation
 * functionality to the rover pages upon selection.
 *
 * State:
 * - loading: boolean to indicate if the weather data is being fetched.
 * - errorOccured: boolean to indicate if an error occurred while fetching data.
 * - weatherData: array that holds the formatted weather data.
 *
 * Effects:
 * - Fetches Mars weather data on component mount and updates the state.
 *
 * Methods:
 * - handleRoverSelection: navigates to the rover page with the selected rover's state.
 * - fetchWeather: async function to fetch and format the Mars weather data.
 *
 * Render:
 * - Displays a background, navbar, hero section, and rover cards.
 * - Shows weather data in card format or loading skeletons if data is being fetched.
 */

function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorOccured, setErrorOccured] = useState(false);
  const [weatherData, setWeatherData] = useState([]);

  const handleRoverSelection = (rover) => {
    navigate(`/rover`, { state: rover });
  };

  const fetchWeather = async () => {
    setLoading(true);
    setErrorOccured(false);
    try {
      const data = await WeatherService.getMarsWeather();
      if (data.length === 0) {
        setWeatherData([]);
        return;
      }
      const formattedWeatherData = data.map((weatherdata) => ({
        date: formatDate(weatherdata.date),
        sol: weatherdata.sol,
        temp: weatherdata.temperature.average,
        wind: weatherdata.wind_speed.average,
        pressure: weatherdata.pressure.average,
      }));
      setWeatherData(formattedWeatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setErrorOccured(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="flex align-items-center grid h-screen w-full">
      <Background />
      <Navbar />
      <div className="flex align-items-center justify-content-center w-full lg:w-6 h-full relative">
        <Hero />
      </div>

      <div className="flex align-items-center justify-content-center w-full lg:w-6 h-full relative z-1">
        <div id="planet" className="planet relative">
          <div className="flex w-full h-full absolute">
            {rovers.map((rover, index) => (
              <RoverCard
                key={index}
                index={index}
                rover={rover}
                handleRoverSelection={handleRoverSelection}
              />
            ))}
          </div>
        </div>
        <div
          id="stars-cloud"
          className={`absolute top-0 left-0 w-full h-full stars-cloud`}
        />
      </div>
      <div className="flex flex-column relative lg:fixed bottom-0 col-12  pl-6 pb-4 z-4">
        <p className="description">
          Get real-time temperature, wind, and pressure data from NASA’s InSight
          lander on Mars
        </p>
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center w-full  gap-4 ">
          {loading ? (
            <div className="flex flex-row gap-4">
              {Array.from({ length: 7 }).map((_, index) => (
                <Skeleton
                  key={index}
                  width="8rem"
                  height="12rem"
                  className="col-3"
                />
              ))}
            </div>
          ) : (
            !errorOccured &&
            weatherData.length > 0 &&
            weatherData.map((_, index) => (
              <div key={index} className="flex flex-row gap-4">
                <WeatherCard
                  key={index}
                  solDay={weatherData[index].sol}
                  date={weatherData[index].date}
                  avreageTemp={weatherData[index].temp}
                  avreagePressure={weatherData[index].pressure}
                  avreageWindSpeed={weatherData[index].wind}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
