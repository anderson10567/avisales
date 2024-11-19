import React from 'react'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import * as reducers from '../../redux/reducer/tickets-reducer'

import classes from './show-morebutton.module.scss'

const ShowMoreButton = () => {
  const dispatch = useDispatch()
  const arrayTickets = useSelector((state) => state.tickets.arrayTickets)

  const handleButton = () => {
    dispatch(reducers.sliceTickets())
  }
  return (
    <div className={classes.container}>
      {arrayTickets.length > 0 ? (
        <Button type="primary" className={classes.button} size="large" onClick={handleButton}>
          показать ещё 5 билетов!
        </Button>
      ) : null}
    </div>
  )
}
export default ShowMoreButton
