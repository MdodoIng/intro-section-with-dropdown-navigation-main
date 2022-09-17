import React from 'react'
import {audioPhile, dataBiz, marker, meet, pic2dec, pic2mob} from '../images/index'
import './home.css'

const Home = () => {
  return (
    <div className='home_container'>
      <div className="left">
          <h1>
            Make <br className='br' /> remote work
          </h1>
          <p>
            Get your team in sync. no matter your location.<br className='br'/> Streamline processes. create team rituals and watch productivity soar
          </p>
          <button>Learn more</button>
          <div className='Home_abd'>
            <img src={dataBiz} alt="" />
            <img src={audioPhile} alt="" />
            <img src={meet} alt="" />
            <img src={marker} alt="" />
          </div>
      </div>
      <div className="right">
        <picture>
          <source media="(min-width: 640px)" srcSet={pic2dec}/>
        <img  src={pic2mob}/>
        </picture>
      </div>
    </div>
  )
}

export default Home