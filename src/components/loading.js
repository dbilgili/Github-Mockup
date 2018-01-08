import React from 'react'
import Header from './header'
import '../styles/loadpage.css'

const Loading = () => {
  return(
    <div>
      <Header/>
      <div className="loading">Loading...</div>
    </div>
  )
}

export default Loading
