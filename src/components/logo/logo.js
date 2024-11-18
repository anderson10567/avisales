import React from 'react'

import classes from './logo.module.scss'
import logo from './Logo.png'

const Logo = () => {
  return (
    <div>
      <img src={logo} alt="Aviasales Logo" className={classes.logo} />
    </div>
  )
}

export default Logo
