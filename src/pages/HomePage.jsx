import React from "react";
import SearchFilter from "../components/SearchFilter";
import CountryList from "../components/CountryList";

const HomePage = () => {
    return (
        <>
            <SearchFilter />
            <CountryList />
        </>
    )
};

export default HomePage;