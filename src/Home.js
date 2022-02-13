import React from 'react'
import coverImage from  './sabiq.jpg'

export default function Home() {
  return (
    <div className='bottom-contianer'>

        <div className="top-part">
          <div>
            <div>
              {/* <div style={{ display: 'flex'}}> */}
              <div>
                  <h1 style={{ marginRight: 15 }}>FULL</h1>
                  <h1>STACK</h1>
              </div>
              {/* <h3 style={{ marginBottom: 15 }}>[ React Js, React Native, Next Js, Node Js, Mongo db, Express Js ]</h3> */}
              <h1 className='stroke-text'>DEVELOPER</h1>
            </div>
          </div>
        </div>

        <div className='bottom-part'>
            {/* <div> */}
            <img alt='' src={coverImage} className="cover-image" />
            {/* </div> */}
            <div className="name-block">
              <h1>SABIQ</h1>
              <h1 className='stroke-text'>THOTTOLY</h1>
              <h1>BAHSEER</h1>
            </div>
        </div>

  </div>
  )
}
