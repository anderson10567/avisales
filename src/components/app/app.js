import React from 'react'

import Logo from '../logo/logo'
import Sort from '../sort/sort'
import Filter from '../filter/filter'
import TicketList from '../ticketList/ticketList'
import ShowMoreButton from '../show-morebutton/show-morebutton'

import classes from './app.module.scss'

const App = () => {
  return (
    <div className={classes.app}>
      <Logo />
      <div className={classes.app__main}>
        <div className={classes.app__sort}>
          <Sort />
        </div>
        <div className={classes.app__ticketlist}>
          <Filter />
          <TicketList />
          <ShowMoreButton />
        </div>
      </div>
    </div>
  )
}

export default App
