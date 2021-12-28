import React from "react";
import { MouseEventHandler, useContext, useEffect, useState } from "react"
import { searchApi } from "../services/api"
import IMovie from "../types/IMovie";
import { SearchContext } from "./layout";
import MovieCard from "./movieCard";

const SearchResult = (): JSX.Element => {

    const { search, setSearch } = useContext(SearchContext);
    const [results, setResults] = useState([]);

    useEffect(() => {    
        if (search.length >= 3) {
            searchApi(search).then(res => {
                setResults(res.data.movies)
                console.log(results);
    
            }).catch(error => console.log(error)
            )
        }
      }, [search, results])

   

    if (results.length == 0) {
        return (
            <div className="flex flex-col gap-y-7 pt-10 px-4 min-h-screen">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl md:text-2xl xl:text-3xl font-bold">Search Results</h2>
                    <button onClick={() => setSearch('')} className="bg-black text-white rounded-2xl p-1">Clear</button>
                </div>
                <div className="flex max-w-screen-xl mx-auto">
                    <p className="text-lg text-center">There is no result for the for <span className="font-bold italic">{search}</span> </p>

                </div>
            </div>
        )
    }
    return (
        <div className="h-screen pt-20 container mx-auto px-4">
            <div className="flex flex-col gap-y-7 pt-10 px-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl md:text-2xl xl:text-3xl font-bold">Search Results</h2>
                    <button onClick={() => setSearch('')} className="bg-black text-white rounded-2xl p-1">Clear</button>
                </div>

                <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 sm:grid-cols-3 max-w-screen-xl mx-auto">

                    {results.map((movie, index) => {
                    return <MovieCard movie={movie} key={index} />
                })}

                </div>
            </div>
        </div>
    )

}

export default React.memo(SearchResult);