import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../instance';
import { Carousel } from 'react-bootstrap';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

function Banner({fetchURL}) {
    // console.log(fetchURL);
    const[movie,setMovie]=useState()
    
    const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchData=async()=>
    {
        const {data}=await instance.get(fetchURL)
        // console.log(data.results);
        setMovie(data.results)
    }
    console.log(movie);

    useEffect(()=>{
        fetchData()
    },[])

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,     
    autoplaySpeed: 2000,
    };

  return (
    <div className='slide-container'>
    <Carousel  prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
        interval={1000}>
      {movie?.map(item => (
        <Carousel.Item key={item.id} style={{ height: '50vh', overflow: 'hidden' }}>
          {/* Apply styles to fit the poster within the carousel item */}
          <img
            className='d-block w-100'
            src={`${base_url}${item.backdrop_path}`}
            alt={item.title}
            style={{ maxWidth: '100%', height: '100%', objectFit: 'cover' }}
          />
          <Carousel.Caption style={{background:'transparent'}}>
            <button className='btn btn-danger mb-3'>NEW SERIES</button>
            <h1 style={{ background: 'transparent', fontWeight: 'bold' }}>
              {item.title}
            </h1>
            <button className='btn btn-light border border-danger mt-3'>
              <i className="fa-solid fa-play bg-light text-danger me-3 text-center"></i>Watch for FREE
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>

  )
}

export default Banner
