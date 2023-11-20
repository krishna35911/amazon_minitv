import React from 'react'
import './Nav.css'
function Nav() {
  return (
    <div style={{height:'70px'}}>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" style={{width:'100%'}}>
  <div class="container-fluid fw-bolder">
    <a class="navbar-brand text-light ms-5 fs-4" href="#">amazon<span>miniTV</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active ms-5" id="home" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light ms-3" href="#">Imported</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light ms-3" href="#">Web Series</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light ms-3" href="#">Movies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light ms-3" href="#">Romance</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light ms-3" href="#">Comedy</a>
        </li>
      </ul>
      <form class="d-flex">
      
        <button className='btn'><i class="fa-brands fa-amazon" style={{color:'orange',fontSize:'22px'}}></i></button>
        <button className='btn'><i class="fa-solid fa-gear text-light me-4" style={{fontSize:'20px',width:'50px'}}></i></button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav


