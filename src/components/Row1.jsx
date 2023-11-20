import React, { useEffect, useState } from 'react'
import instance from '../instance'
import './Row1.css'

function Row1({fetchURL,isPoster,title}) {

    const[movie,setMovie]=useState()

    const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchData = async ()=>{
        const {data}=await instance.get(fetchURL)
        setMovie(data.results)
    }
    console.log(movie);

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className='row'>
        <h1 style={{fontFamily:'inherit',fontSize:'20px'}}>{title}</h1>
      <div className='movie_row'>
        { movie?.map(item=>(
              <img className={`movies ${isPoster && 'movie_poster'}`} src={`${base_url}${isPoster?item?.poster_path:item?.backdrop_path}`} style={{height:'200px',width:'800px'}}/>
        ))
            
        }
      </div>
    </div>
  )
}

export default Row1
