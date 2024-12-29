import { useState } from "react"
import styles from "./SearchBar.module.css"

export const SearchBar = ({onSearch}) =>{
    const [cityInput, setCityInput] =useState('');

    const handleSearch = () => {
        onSearch(cityInput);
    }

    return(
        <div className={styles.root}>
            <input
            className={styles.input}
            type="text"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            placeholder="Enter city name"
            />
            <button onClick={handleSearch} className={styles.button}>Search</button>
        </div>
    )
}