import React from 'react'
import Header from './header'

const NotFound = (props) =>{
  return(
    <div>
      <Header/>
      <div className="noResult">{props.info}</div>
    </div>
  )
}

export default NotFound
