import IMovie from "../types/IMovie";
import MovieCard from "./movieCard";
import '../styles/Home.module.css';
import Link from "next/link";

interface Props {
    categoryMovies: IMovie[];
    name: string;
}

export default function Category(props: Props): JSX.Element {
    const { categoryMovies, name } = props;

    return (
        <div className="flex flex-col gap-y-7 pt-10 pb-28">
            <div className="flex justify-between items-center">
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold">{name}</h2>
                <Link href="/movies"><a className="bg-black text-white rounded-2xl px-3 py-1">See all</a></Link>
            </div>

            <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 sm:grid-cols-3 max-w-screen-xl mx-auto">
                {categoryMovies.map((movie, index) => {
                    return <MovieCard movie={movie} key={index} />
                })}
            </div>
        </div>
    );
}
