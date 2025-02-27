import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Home } from './Home';
import { WeatherService } from '../services/WeatherService';

jest.mock('../services/WeatherService');

describe('Home component', () => {
  it('should navigate to the correct route when handleRoverSelection is called', () => {
    const navigate = jest.fn();
    const { getByText } = render(<Home navigate={navigate} />);
    const roverCard = getByText('Rover Card');
    fireEvent.click(roverCard);
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/rover', { state: { rover: 'Rover' } });
  });

  it('should set loading to true when fetchWeather is called', async () => {
    const setLoading = jest.fn();
    const { getByText } = render(<Home setLoading={setLoading} />);
    await waitFor(() => expect(setLoading).toHaveBeenCalledTimes(1));
    expect(setLoading).toHaveBeenCalledWith(true);
  });

  it('should set errorOccured to true when an error occurs in fetchWeather', async () => {
    WeatherService.getMarsWeather.mockRejectedValue(new Error('Test error'));
    const setErrorOccured = jest.fn();
    const { getByText } = render(<Home setErrorOccured={setErrorOccured} />);
    await waitFor(() => expect(setErrorOccured).toHaveBeenCalledTimes(1));
    expect(setErrorOccured).toHaveBeenCalledWith(true);
  });

  it('should set weatherData to an empty array when no data is returned in fetchWeather', async () => {
    WeatherService.getMarsWeather.mockResolvedValue([]);
    const setWeatherData = jest.fn();
    const { getByText } = render(<Home setWeatherData={setWeatherData} />);
    await waitFor(() => expect(setWeatherData).toHaveBeenCalledTimes(1));
    expect(setWeatherData).toHaveBeenCalledWith([]);
  });

  it('should format the weather data correctly in fetchWeather', async () => {
    const weatherData = [
      { date: '2022-01-01', sol: 1, temperature: { average: 10 }, wind_speed: { average: 5 }, pressure: { average: 100 } },
    ];
    WeatherService.getMarsWeather.mockResolvedValue(weatherData);
    const setWeatherData = jest.fn();
    const { getByText } = render(<Home setWeatherData={setWeatherData} />);
    await waitFor(() => expect(setWeatherData).toHaveBeenCalledTimes(1));
    expect(setWeatherData).toHaveBeenCalledWith([
      { date: '2022-01-01', sol: 1, temp: 10, wind: 5, pressure: 100 },
    ]);
  });

  it('should render the loading skeletons when loading is true', () => {
    const { getByText } = render(<Home loading={true} />);
    expect(getByText('Skeleton')).toBeInTheDocument();
  });

  it('should render the weather cards when weatherData is not empty', () => {
    const weatherData = [
      { date: '2022-01-01', sol: 1, temp: 10, wind: 5, pressure: 100 },
    ];
    const { getByText } = render(<Home weatherData={weatherData} />);
    expect(getByText('Weather Card')).toBeInTheDocument();
  });
});