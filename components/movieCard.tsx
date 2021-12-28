import IMovie from "../types/IMovie"
import Link from "next/link"
import Image from "next/image"
import { Suspense } from "react";
import Loader from "./loader";
interface Props {
    movie: IMovie;
}

export default function MovieCard(props: Props) {

    // get movies object from parent and display information

    const { movie } = props;
    return (
        <div className="flex flex-col p-3 bg-gray-200 m-1 shadow-md w-32 sm:w-40 lg:w-48 xl:w-56 flex-1 hover:scale-[1.02] transition">
            <Link href={"/movies/" + movie.slug}>
                <a>
                    <div className="relative image-container h-36 aspect-h-3 aspect-w-2">
                        <Image layout="fill" objectFit="contain" alt={movie.slug} src={movie.poster} className="poster-image" />
                    </div>
                </a>
            </Link>
            <Link href={"/movies/" + movie.slug}>
                <a>
                    <h2 className="font-bold text-sm truncate text-left mt-3">{movie.title}</h2>
                </a>
            </Link>
            <div className="flex justify-between items-center mb-4">
                <p className="text-sm italic">{movie.released_on.substring(0, 4)}</p>
                <p className="text-sm">{movie.length}</p>
            </div>
            <div className="flex justify-between items-center mt-auto">
                <p className="text-sm bg-yellow-300">Rating: {movie.imdb_rating}</p>
                <p className="text-[12px] bg-black text-white rounded-full p-1">{movie.classification}</p>
            </div>
        </div>

    )
}
