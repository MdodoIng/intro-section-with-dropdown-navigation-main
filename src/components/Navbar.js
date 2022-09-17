import React, { useState, useEffect } from 'react'
import { arrowDn, arrowUp, logo, menu, menuClose } from '../images/index'
import './navbar.css'
import { navDetails, listOfFeat, list } from '../content/content'

const initialState = {
  Features: false,
  Company: false,
}
const Navbar = () => {
  const [feature, setFeature] = useState(initialState);
  const [isClicked, setIsClicked] = useState(false)
  const [toggle, setToggle] = useState(false)


  const handelClick = (clicked) => {
    setFeature({ ...initialState, [clicked]: true })
    setIsClicked((prev) => !prev)

    console.log(feature)
  }


  return (
    <nav className='nav_container'>
      <div className='nav_logo'>
        <img src={logo} className='app' alt="" />
        
        <div className='nav_mob_toggle' onClick={() => setToggle(!toggle)}>
        <img src={toggle ? menu: menuClose} alt="" />

         
        </div>
      </div>
      <div 
      // style={{display:'none'}} 
      className={!toggle?  'nav_links' : 'none'} >

        <div className='nav_links-first'>
          <div className='nav_LiNKSman'>

          {navDetails.map((NavD, i) => (
            <ul key={NavD.title}>
              <li onClick={() => handelClick(NavD.title)}
              >
                {NavD.title}<img alt='' src=
                  {isClicked ? arrowUp : arrowDn}

                  style={NavD.list && NavD.title ? { display: 'block' } : { display: 'none' }
                }
                />
              </li>
              {NavD.list?.map((item, index) => (

                 <div key={item.id} className={!feature.Company && feature.Features ? 'nav_link-item_list1': 'none'}>

                 <img src={item.logo} alt="" className={!item.logo ? 'none': '' } />
                 <p>{item.text}</p>
               </div>

              ))}

            </ul>
          ))}
          <div className={!feature.Features === true ? "none" : 'nav_link-item1'}>
            {listOfFeat.map((item) => (
              <div key={item.id} className='nav_link-item_list1'>
                <img src={item.logo} alt="" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className={!feature.Company === true ? "none" : 'nav_link-item2'}>
            {list.map((item) => (
              <div className='nav_link-item_list2'>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
                </div>
        <div className='nav_logIn'>
          <button className='logIn'>Login</button>
          <button className='register'>Register</button>
        </div>
              
        </div>
      </div>
    </nav>
  )
}

export default Navbar