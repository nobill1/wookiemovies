import type { NextPage } from 'next'
import { Suspense, useContext, useEffect, useState } from 'react'
import Category from '../components/category'
import { SearchContext } from '../components/layout'
import Loader from '../components/loader'
import SearchResult from '../components/search'
import { moviesApi } from '../services/api'
import styles from '../styles/Home.module.css'
import IMovie from '../types/IMovie'


const Home: NextPage = () => {

  const [movies, setMovies] = useState<IMovie[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const { search } = useContext(SearchContext);

  useEffect(() => {    
    moviesApi.then((res) => {
      const movies = res.data.movies;
      setMovies(movies)
      let arr: string[] = []
      movies.map((movie: any) => {
        movie.genres.map((e: string) => arr.push(e)) // get all movies categories from movies list
      })
      setCategories(Array.from(new Set(arr))); // remove repeating movie categories from movie list      
    }).catch(error => console.log(error)
    )
  }, [])

  function categoryFilter(category: string) {
    let categoryArray: IMovie[] = []
    movies.map(movie => {
      if (movie.genres.includes(category)) {
        categoryArray.push(movie) // going through movies if movie has category name, stores movie to category
      }
    })
    return categoryArray;
  }

  return (
    <Suspense fallback={Loader}>
      {search.length < 1 ? 
      <div className="customHeight pt-20 container mx-auto px-4">
        {categories.map(e => {
          let categoryMovies = categoryFilter(e);

          return <Category categoryMovies={categoryMovies} key={e} name={e} />
        })}
      </div> : <SearchResult />}
    </Suspense>
  )
}

export default Home
