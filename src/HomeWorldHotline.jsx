import React, { useState } from 'react'


const HomeWorldHotline = () => {
  const [name, setName] = useState("")
  const [location1, setLocation1] = useState("")
  const [location2, setLocation2] = useState("")

  const placeCall = () => {
    console.log('call placed')
  }
  return(
    <div>
      <h1>Home World Hotline</h1>
      <h2>Please enter the name and quadrant of your home world 
        and our friendly operator will connect you</h2>
      <p>Please note: Quadrant CU-5462 is currently unavailable, 
        including planets Besik and Hralton. We apologize for any inconvenience. 
      </p>
      <form onSubmit={placeCall}>
        <input type='text' placeholder='Planet Name' className='planetName' onChange={e => setName(e.target.value)}></input>
        <input maxLength='2' type='text' placeholder='XX' className='planetLocation1' onChange={e => setLocation1(e.target.value)}></input>
        -
        <input maxLength='4' type='text' placeholder='XXXX' className='planetLocation2' onChange={e => setLocation2(e.target.value)}></input>
        <input type="submit" value="Place Call"></input>
      </form>
    </div>
  )
}

export default HomeWorldHotline;