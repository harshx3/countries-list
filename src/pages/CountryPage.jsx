import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";


const CountryPage = () => {

    const { theme, selectedCountry, data } = useContext(ThemeContext);


    const languages = selectedCountry.languages.map(language => language.name) || [];
    const currency = selectedCountry.currencies.map(currency => currency.name) || [];
    const border = selectedCountry.borders ?? [];
    const bordersName = border.map((borderCode) => {
        const matchingCountry = data.find(country => country.alpha3Code === borderCode);
        return matchingCountry ? matchingCountry.name : null;
    }).filter(Boolean);

    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/");
    }


    return (
        <div className={`country-container nunito-sans-text ${theme ? "dark-bg" : "light-bg"}`}>

            <button className={`back-btn ${theme ? 'dark-back-bg' : "light-back-bg"}`} onClick={handleBack}><GoArrowLeft />
                Back</button>

            <div className={`country-div ${theme ? "light-text" : "dark-text"}`}>

                <div className="img-container">
                    <img src={selectedCountry.flags.png} />
                </div>

                <div className="country-info-div">
                    <div className="country-info-holder">
                        <div className="country-generalInfo-div">
                            <h3>{selectedCountry.name}</h3>
                            <p><strong>Native Name: </strong>{selectedCountry.nativeName}</p>
                            <p><strong>Population: </strong>{selectedCountry.population.toLocaleString()}</p>
                            <p><strong>Region: </strong>{selectedCountry.region}</p>
                            <p><strong>Sub Region: </strong>{selectedCountry.subregion}</p>
                            <p><strong>Capital: </strong>{selectedCountry.capital}</p>
                        </div>

                        <div className="country-internalInfo-div">
                            <p><strong>Top Level Domain: </strong>{selectedCountry.topLevelDomain}</p>
                            <p><strong>Currencies: </strong>{...currency}</p>
                            <p><strong>Languages: </strong>{...languages.toLocaleString()}</p>
                        </div>

                    </div>

                    <div className="border-country-div">
                        <p><strong>Border Countries: </strong></p>
                        <div className="border-box-container">
                            {bordersName.map((name, index) => (
                                <p key={index} className="border-name">
                                    {name}
                                </p>
                            ))}
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )

};

export default CountryPage;
