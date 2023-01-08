
import { useEffect,useState } from 'react';
import './App.css';
import search from "./search.svg"
import { MovieCard } from './MovieCard'
import NavBar from './NavBar';

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=f8aea2ad"

const Main=() => {
  const [movies,setMovies]=useState([])
  const[searchTerm,setSearchTerm]=useState("")


  const searchMovies=async (title) => {
const response = await fetch(`${API_URL}&s=${title}`)
const data = await response.json();
console.log(data)
setMovies(data.Search)
  }
  
  useEffect(() => { 
    searchMovies("spiderman")
  }, [])


  const movie1={Title: 'Spiderman unlimited the movie', Year: '2023', imdbID: 'tt18969216', Type: 'movie', Poster: 'N/A'}
  
  return (<>
    <NavBar/>
   <div className='app'>
    <h1>MovieCloud</h1>
    <div className='search'>
      <input placeholder='Search for movies'
      value={searchTerm}
      onChange={(s) => setSearchTerm(s.target.value)}
      />

      <img src={search} alt="search" onClick={() => searchMovies(searchTerm)} />

      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
    </>
  )
}
     


export default Main;
