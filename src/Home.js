import React from 'react'
import coverImage from  './sabiq.jpg'

export default function Home() {
  return (
    <div className='bottom-contianer'>
    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
      <div>
        <div>
          <h1>FULL STACK</h1>
          <h3 style={{ marginBottom: 15 }}>[ React Js, React Native, Next Js, Node Js, Mongo db, Express Js ]</h3>
          <h1>DEVELOPER</h1>
        </div>
        <div>
          <img alt='' src={coverImage} className="cover-image" />
        </div>
      </div>
    </div>
    <div className="name-block">
      <h1>SABIQ</h1>
      <h1>THOTTOLY</h1>
      <h1>BAHSEER</h1>
    </div>
  </div>
  )
}
