import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { NavLink } from "react-router-dom";

const CountryList = () => {
    const { theme, filteredData, data, searchByRegion, searchResult, showCountryDetails } = useContext(ThemeContext);

    const displayData = () => {
        if (filteredData.length > 0) {
            return filteredData;
        }
        return data;
    };

    const handleCountryClick = (name) => {
        showCountryDetails(name);
    }

    const showData = displayData();

    return (
        <div className={`country-list nunito-sans-text ${theme ? "dark-bg" : "light-bg"}`}>
            {showData.map((country, index) => (
                <NavLink style={{ textDecoration: "none" }} className={theme ? "ligth-text" : "dark-text"} to={`/${country.name}`} key={country.name}><div onClick={() => handleCountryClick(country.name)} key={index} className={`country ${theme ? "country-dark" : "country-light"}`}>
                    <div className="img-div">
                        <img src={country.flags.png} alt={`${country.name} flag`} />
                    </div>

                    <div className="country-details">
                        <div className="country-name-div">
                            <p className="nunito-sans-name">{country.name}</p>
                        </div>

                        <div className="country-stats-div">
                            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                            <p><strong>Region:</strong> {country.region}</p>
                            <p><strong>Capital:</strong> {country.capital}</p>
                        </div>
                    </div>
                </div> </NavLink>
            ))
            }
        </div >
    );
};

export default CountryList;
