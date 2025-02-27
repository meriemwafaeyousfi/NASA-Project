import "primeflex/primeflex.css";
import "../App.css";
import { Card } from "primereact/card";

/**
 * A component that displays a weather card with the following information:
 * - SOL day
 * - Date
 * - Average temperature
 * - Average wind speed
 * - Average pressure
 *
 * The component is a prime react card component with a blur effect and a rounded
 * border. The text is centered and the font size is set to small.
 *
 * @param {{ solDay: number, date: string, avreageTemp: number, avreageWindSpeed: number, avreagePressure: number}} props
 * @returns {React.ReactElement}
 */
function WeatherCard({
  solDay,
  date,
  avreageTemp,
  avreageWindSpeed,
  avreagePressure,
}) {
  return (
    <Card
      className="pl-3 pr-3 h-40 text-center text-white"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: "10px",
      }}
    >
      <h3 className="text-ms">SOL {solDay}</h3>
      <div className="text-sm">{date}</div>
      <hr className="border-t border-gray-300 my-2" />
      <p className="text-sm ">Temp : {Math.round(avreageTemp)}°F</p>
      <p className="text-sm ">
        Wind speed : {Math.round(avreageWindSpeed)} mph
      </p>
      <p className="text-sm ">Pressure : {Math.round(avreagePressure)} hPa</p>
    </Card>
  );
}

export default WeatherCard;
