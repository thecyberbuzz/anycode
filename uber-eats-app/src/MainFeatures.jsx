import React from 'react'




export default function MainFeatures(props) {
  return (
    <>
      <div className='feature'>
<img src={props.img} alt=""  className='features-image'/>
<h2 className='features-head'>{props.heading}</h2>
<a href='' className='features-link'>{props.link}</a>
      </div>
    </>
  )
}
