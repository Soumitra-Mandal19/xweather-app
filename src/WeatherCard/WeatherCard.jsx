import "./WeatherCard.css"
export const WeatherCard = ({title, data}) => {
    return(
        <div className="weather-card">
            <div><h3>{title}</h3></div>
            <div><p>{data}</p></div>
            
        </div>
    )
}