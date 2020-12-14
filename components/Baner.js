import React,{useState,useEffect} from 'react'
import API from "../axiosFetch"
import requests from "../request"
import "./components.css"

function Baner() {
    const [movie, setMovie]=useState([]);
    useEffect(()=>{
        async function fetchData()
        {
            const request=await API.get(requests.fetchNetflixOrginals);
            setMovie(
                request.data.results[Math.floor(Math.random()*request.data.results.length)]
            )
        }
        fetchData();
        },[])
        console.log(movie);
        function truncate(str,n){
            return str?.length>n?str.substr(0,n-1)+"...":str
        }
    return (

        <header className="banner"
        style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.poster_path}")`,
        backgroundPosition:"center center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
        }}>
            <div className="banner_details">
              <h2 className="banner_title">{movie?.name||movie?.original_name||movie?.title}</h2>
              <div className="banner_buttons">
                  <button className="banner_button">Play Now</button>

                  <button className="banner_button">My List</button>
              </div>
              <p className="banner_description">{truncate(movie?.overview,150)}</p>
            </div>
        </header>
    )
}

export default Baner
