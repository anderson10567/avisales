import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from 'nanoid'

import Ticket from '../ticket/ticket'
import * as reducers from '../../redux/reducer/tickets-reducer'

import classes from './ticketList.module.scss'

const TicketList = () => {
  let ticketList = []
  const sliceNumber = useSelector((state) => state.tickets.sliceNumber)
  const sortAll = useSelector((state) => state.tickets.sortAll)
  const sortWithout = useSelector((state) => state.tickets.sortWithout)
  const sortOne = useSelector((state) => state.tickets.sortOne)
  const sortTwo = useSelector((state) => state.tickets.sortTwo)
  const sortThree = useSelector((state) => state.tickets.sortThree)
  const dispatch = useDispatch()
  const tickets = useSelector((state) => state.tickets.tickets)
  const stop = useSelector((state) => state.tickets.stop)
  const { searchId } = useSelector((state) => state.searchId)
  const arrayTickets = useSelector((state) => state.tickets.arrayTickets)
  useEffect(() => {
    dispatch(reducers.fetchSearchId())
  }, [])

  useEffect(() => {
    if (searchId && !stop) {
      dispatch(reducers.fetchTicketsThunk(searchId))
      dispatch(reducers.ticketsSlice.actions.filtersTickets())
      dispatch(reducers.ticketsSlice.actions.sortTickets())
      dispatch(reducers.ticketsSlice.actions.sliceTickets(sliceNumber || 5))
    }
  }, [searchId, tickets, dispatch, stop, sliceNumber])

  useEffect(() => {
    dispatch(reducers.ticketsSlice.actions.sliceTickets(sliceNumber || 5))
  }, [sortAll, sortWithout, sortOne, sortTwo, sortThree, dispatch, sliceNumber])
  if (arrayTickets.length > 0) {
    ticketList = arrayTickets.map((ticket) => {
      return <Ticket ticket={ticket} key={nanoid()} />
    })
  }
  return (
    <div>
      {arrayTickets.length > 0 ? (
        ticketList
      ) : (
        <div className={classes.empty__container}>По вашему запросу ничего не найдено</div>
      )}
    </div>
  )
}

export default TicketList
