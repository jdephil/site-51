import React, { useState } from 'react'
import DOMpurify from 'dompurify'
import {  Link } from 'react-router-dom'


const HomePage = () => {
  
  const handleFlip = (e) => {
    e.preventDefault()

    let cleanTagline = DOMpurify.sanitize('<h2>Welcome Traveler</h2>')
    let cleanhwh = DOMpurify.sanitize(
    "<h3 onClick={linkHWH}>Home World Hotline</h3>")
    let cleanBanking = DOMpurify.sanitize('<h3>Intergalactic Bank</h3>')
    let cleanReporting = DOMpurify.sanitize("<h3>Report A Human</h3></div>")
    document.querySelector('.homeTagline').innerHTML = cleanTagline
    document.querySelector(".hwhLink").innerHTML = cleanhwh
    document.querySelector(".bankingLink").innerHTML = cleanBanking
    document.querySelector(".reportingLink").innerHTML = cleanReporting
  }

  return(
    <div>
      <header>The Stellar Group</header>
      <h2 className='homeTagline'>Modern Living, Stellar Luxury</h2>
      <p className='homeP'>Enter a world elevated above the common. With brand new, state of the art features
        and amentities, your life can take off in the most incredible direction. That is what
        joining the Stellar Group can do for you.
      </p>
      <Link className="hwhLink" to='/hwh'></Link>
      <Link className="bankingLink" to='/banking'></Link>
      <Link className="reportingLink" to='/reporting'></Link>
      <button onClick={handleFlip}>flip</button>
    </div>
  )
}

export default HomePage;