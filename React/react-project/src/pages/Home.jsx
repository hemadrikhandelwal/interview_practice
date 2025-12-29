import MovieCard from "../components/MovieCard"
import { useEffect, useState } from "react"
import '../css/Home.css'
import { getPopularMovies } from "../services/api"

function Home() {

    const [searchQuery, setsearchQuery] = useState("")
    const [movies,setMovies] = useState([])
    const [error,setError] = useState('')
    const[loading,setLoading] = useState(true)

    useEffect(()=>{
        const loadPopularMovies = async ()=> {
            try {
                const PopularMovies = await getPopularMovies()
                setMovies(PopularMovies)
            }
            catch(err){
                console.log(err);
                setError("Failed to load movies...")
            }
            finally{
                    setLoading(false)
                }
            
        } ;loadPopularMovies()
    },[])

    // const movies = [
    //     { id: 1, title: 'Movie1', release_date: "2022" },
    //     { id: 2, title: 'Movie2', release_date: "2022" },
    //     { id: 3, title: 'Movie3', release_date: "2022" }

    // ]

    // const movies = getPopularMovies()

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }

    return (

        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Sarch for movies.." className="search-input" value={searchQuery} onChange={(e) => setsearchQuery(e.target.value)} />
                <button type="submit" className="search-button"> Search </button>
            </form>

            <div className="movies-grid">
                {movies.map(movie => movie.title.toLowerCase().startsWith(searchQuery) &&
                    <MovieCard movie={movie} key={movie.id} />)}
            </div>
        </div>
    )
}

export default Home