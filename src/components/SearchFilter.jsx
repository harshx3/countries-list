import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";

const SearchFilter = () => {
    const { theme, searchResult, searchByRegion } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const openFilter = () => {
        setIsOpen(prev => !prev);
    };

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        searchResult(e.target.value); // Update search result as user types
    };

    const handleRegionClick = (region) => {
        searchByRegion(region); // Filter by region when a region is selected
        setIsOpen(false); // Close the dropdown after selection
    };

    return (
        <div className={`search-filter-div nunito-sans-text ${theme ? "dark-search-filter" : "light-search-filter"}`}>
            <div className="search-div">
                <IoIosSearch className={`search-icon ${theme ? "search-icon-dark" : "search-icon-light"}`} />
                <input value={searchValue} onChange={handleChange} className={`search nunito-sans-text ${theme ? "search-dark" : "search-light"}`} type="search" placeholder="Search for a country..." />
            </div>

            <div className={`dropdown-container ${theme ? "dd-container-dark" : "dd-container-light"}`}>
                <button className={`nunito-sans-text dropdown-btn ${theme ? "dd-btn-dark" : "dd-btn-light"}`} onClick={openFilter}>Filter by Region <RiArrowDropDownLine className="dd-icon" /></button>
                {isOpen &&
                    <div className={`dropdown-list ${theme ? "dd-list-dark" : "dd-list-light"}`}>
                        <p onClick={() => handleRegionClick("africa")}>Africa</p>
                        <p onClick={() => handleRegionClick("americas")}>America</p>
                        <p onClick={() => handleRegionClick("asia")}>Asia</p>
                        <p onClick={() => handleRegionClick("europe")}>Europe</p>
                        <p onClick={() => handleRegionClick("oceania")}>Oceania</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default SearchFilter;
