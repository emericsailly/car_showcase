"use client";

import { SearchBarProps } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import { SearchManuf } from ".";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
            src="/magnifying-glass.svg"
            alt="magnifying glass"
            height={40}
            width={40}
            className="object-contain"
        />
    </button>
);

const Searchbar = ({ setManuf, setModel }: SearchBarProps) => {
    const [searchManuf, setSearchManuf] = useState("");
    const [searchModel, setSearchModel] = useState("");

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (searchManuf === "" && searchModel === "") {
            return alert("Please fill in the search bar");
        }

        setModel(searchModel.toLowerCase());
        setManuf(searchManuf.toLowerCase());
    };

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManuf
                    selected={searchManuf}
                    setSelected={setSearchManuf}
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <div className="searchbar__item">
                <Image
                    src="/model-icon.png"
                    width={25}
                    height={25}
                    className="absolute w-[20px] h-[20px] ml-4"
                    alt="car model"
                />
                <input
                    type="text"
                    name="model"
                    value={searchModel}
                    onChange={(e) => setSearchModel(e.target.value)}
                    placeholder="Tiguan"
                    className="searchbar__input"
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <SearchButton otherClasses="max-sm:hidden" />
        </form>
    );
};

export default Searchbar;
