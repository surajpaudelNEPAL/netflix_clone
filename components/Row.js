import React,{useState,useEffect} from 'react'
import "./components.css"
import API from "../axiosFetch"

const img_BaseUrl="https://image.tmdb.org/t/p/original/";
function Row({title,fetchUrl,isLarge}) {
    const [movie,  setMovie]=useState([]);

    useEffect(()=>{
    async function fetchData()
    {
        const request=await API.get(fetchUrl);
      
        setMovie(request.data.results);
      
    }
    fetchData();
    },[fetchUrl])
    return (
        <div className="row">
           <h2 style={{color:"white"}}>{title}</h2> 
        <div className="imageContainer">
            {movie.map((pic)=>
            {
          return(
            
              <img src={`${img_BaseUrl}${isLarge?pic.poster_path:pic.backdrop_path}`} 
              alt={pic.name}
              key={pic.id}
             className={`images ${isLarge && "largeImg"}`} />
           
            )})}
        </div>
        </div>
    )
}

export default Row
