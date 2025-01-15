import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(false);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [dataByRegion, setDataByRegion] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [error, setError] = useState(null);  // Added state for error handling

    const themeToggle = () => {
        setTheme(prevTheme => !prevTheme);
    };

    const fetchData = async () => {
        try {
            const res = await axios("/data.json");
            setData(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("Failed to load data. Please try again later.");
        }
    };

    const searchResult = (searchFor) => {
        const newData = data.filter(country =>
            country.name.toLowerCase().includes(searchFor.toLowerCase())
        );
        setFilteredData(newData);
    };

    const searchByRegion = (region) => {
        setDataByRegion(region);
    };

    const showCountryDetails = (selectedCountry) => {
        const countryData = data.find((country) =>
            country.name === selectedCountry
        );
        setSelectedCountry(countryData);
    }

    useEffect(() => {
        if (!data.length) {  // Avoid unnecessary fetching
            fetchData();
        }
    }, [data]);

    useEffect(() => {
        if (dataByRegion) {
            const regionData = data.filter(country => country.region.toLowerCase() === dataByRegion);
            setFilteredData(regionData);
        } else {
            setFilteredData([]);
        }
    }, [dataByRegion, data]);

    return (
        <ThemeContext.Provider value={{
            theme,
            themeToggle,
            data,
            searchResult,
            filteredData,
            searchByRegion,
            dataByRegion,
            showCountryDetails,
            selectedCountry,
            error, // Provide error state
        }}>
            {children}
        </ThemeContext.Provider>
    );
};
