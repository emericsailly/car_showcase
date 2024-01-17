"use client";

import { CarCard, CustomFilter, Hero, Searchbar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
    const [allCars, setAllCars] = useState([]);
    const [loading, setLoading] = useState(false);

    //search states
    const [manuf, setManuf] = useState("");
    const [model, setModel] = useState("");

    //filter states
    const [fuel, setFuel] = useState("");
    const [year, setYear] = useState(2022);

    const [limit, setLimit] = useState(10);

    const getCars = async () => {
        try {
            setLoading(true);

            const result = await fetchCars({
                manuf: manuf || "",
                year: year || 2022,
                fuel: fuel || "",
                limit: limit || 10,
                model: model || "",
            });

            setAllCars(result);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        console.log(fuel, year, limit, model, manuf);
        getCars();
    }, [fuel, year, limit, model, manuf]);

    return (
        <main className="overflow-hidden">
            <Hero />

            <div className="mt-12 padding-x padding-y max-width" id="discover">
                <div className="home__text-container">
                    <h1 className="text-4xl font-extrabold">
                        Car Catalogue ({allCars.length})
                    </h1>
                    <p>Explore out cars you might like</p>
                </div>

                <div className="home__filters">
                    <Searchbar setManuf={setManuf} setModel={setModel} />

                    <div className="home__filter-container">
                        <CustomFilter options={fuels} setFilter={setFuel} />
                        <CustomFilter
                            options={yearsOfProduction}
                            setFilter={setYear}
                        />
                    </div>
                </div>

                {allCars.length > 0 ? (
                    <section>
                        <div className="home__cars-wrapper">
                            {allCars?.map((car, index) => (
                                <CarCard key={index} car={car} />
                            ))}
                        </div>
                        {loading && (
                            <div className="mt-16 w-full flex-center">
                                <Image
                                    src="/loader.svg"
                                    alt="loader"
                                    width={50}
                                    height={50}
                                    className="object-contain"
                                />
                            </div>
                        )}
                        <ShowMore
                            pageNumber={limit / 10}
                            isNext={limit > allCars.length}
                            setLimit={setLimit}
                        />
                    </section>
                ) : (
                    <div className="home__error-container">
                        <h2 className="text-black text-xl font-bold">
                            Oops, no results
                        </h2>
                        <p>{allCars?.message}</p>
                    </div>
                )}
            </div>
        </main>
    );
}
