
import { useEffect, useState } from 'react';
import './App.css';
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";
//370d2d5c
const API_URL="http://www.omdbapi.com/?apikey=370d2d5c";


const  App=()=> {
 
  const [movies,setMovies]=useState([]);
  const [searchTerm,setSearchTerm]=useState("");
  const search= async (title)=>{
    const response=await fetch(`${API_URL}&s=${title}`);
    const data=await response.json();
    setMovies(data.Search);
  }
  useEffect(()=>{
    search("spiderman");
  },[])
  return (

    <div className='app'>
      <h1>Movie Land</h1>
      <div className='search'>
        <input 
        placeholder='Search for Movies'
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={()=>search(searchTerm)}
        />
      
       
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
  );
}

export default App;
