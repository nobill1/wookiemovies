import { moviesApi, searchApi } from "../../services/api";
import IMovie from "../../types/IMovie";
import Image from 'next/image'

export default function MovieDetail(movie: IMovie): JSX.Element {
    return (
        <>            
            <div className="min-h-screen">
                <div className="container flex mx-auto pt-20 px-4 pb-28 justify-around">
                    <div className="flex flex-col pt-10 md:flex-row md:h-full md:items-center md:justify-center md:w-screen md:gap-6 xl:gap-8">
                        <div className="mb-4 md:w-96">
                            <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl max-w-sm">{movie.title}</h1>
                            <div className="my-2 flex gap-1 md:text-lg"> <p>{movie.released_on.slice(0, 4)}</p><span>&#183;</span><p className="text-[12px] bg-black text-white rounded-full p-1">{movie.classification}</p><span>&#183;</span><p>{movie.length}</p> </div>
                            <div className="relative image-container aspect-h-3 aspect-w-2">
                                <Image layout="fill" objectFit="contain" alt={movie.slug} src={movie.poster} className="poster-image" />
                            </div>
                        </div>
                        <div className="flex flex-col text-xl xl:text-2xl">
                            <div>
                                <div className="flex gap-2 my-4">
                                    {movie.genres.map((e, index) => <p className="text-[14px] border-2 bg-gray-700 border-black text-white italic font-bold rounded-full py-1 px-2" key={index}>{e}</p>)}
                                </div>
                                <p><span className="font-bold">Director:</span> {movie.director}</p>
                                <div className="flex gap-2 mt-1">
                                    <p><span className="font-bold">Cast:</span> {movie.cast.join(", ")}</p>
                                </div>
                                <div className="max-w-md mt-2">
                                    <p>{movie.overview}</p>
                                    <p className="text-sm md:text-lg bg-yellow-300 inline pr-1">Rating: {movie.imdb_rating}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps(params: { params: { slug: string; } }) {
    const movie = await searchApi(params.params.slug).then(res => res.data.movies[0]);
    return { props: movie }
}

export async function getStaticPaths() {
    const movies = await moviesApi.then(res => res.data.movies);
    const paths = movies.map((movie: IMovie) => {
        return {
            params:
            {
                slug: movie.slug
            }
        }
    })
    return {
        paths, fallback: false
    }
}
