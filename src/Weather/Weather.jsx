import { useState } from "react"
import { SearchBar } from "../SearchBar/SearchBar";
import { WeatherDisplay } from "../WeatherDisplay/WeatherDisplay";


export const Weather = () => {

    const [city, setCity] = useState('');

    const handleSearch = (searchCity) => {
        setCity(searchCity);
    }
    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <WeatherDisplay city={city} />
        </div>
    )
}