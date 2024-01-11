"use client";

import { useState } from "react";
import { SearchManuf } from ".";

const Searchbar = () => {
    const [manuf, setManuf] = useState("");

    const handleSearch = () => {};

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManuf manuf={manuf} setManuf={setManuf} />
            </div>
        </form>
    );
};

export default Searchbar;
