import axios from "axios";
import { useEffect, useState } from "react"
import { WeatherCard } from "../WeatherCard/WeatherCard";
import "./WeatherDisplay.css"

export const WeatherDisplay = ({ city }) => {

    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (city) {
            setLoading(true);
            axios.get(`https://api.weatherapi.com/v1/current.json`, {
                params: {
                    Key: "074a9d96989a478dae6203433242812",
                    q: city
                }
            }).then((response) => {
                setWeatherData(response.data);
            }).catch((error) => {
                console.error("Error fetching data: ", error);
                alert("Failed to fetch weather data");
            }).finally(() => {
                setLoading(false);
            });
        }
    }, [city])
    return (
        <div className="root">
            {loading && <p>Loading data...</p>}
            {!loading && weatherData && (
                <div className="weather-cards">
                    <WeatherCard
                    title="Temperature"
                    data={`${weatherData.current.temp_c}°C`} 
                    />
                    <WeatherCard 
                    title="Humidity"
                    data={`${weatherData.current.humidity}%`}
                    />
                    <WeatherCard 
                    title="Condition"
                    data={weatherData.current.condition.text}
                    />
                    <WeatherCard 
                    title="Wind Speed"
                    data={`${weatherData.current.wind_kph} kph`}
                    />
                </div>
            )}
        </div>
    );
};