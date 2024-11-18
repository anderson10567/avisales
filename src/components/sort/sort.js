import React from 'react'
import { Checkbox } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

import * as reducers from '../../redux/reducer/tickets-reducer'

import classes from './sort.module.scss'

const Sort = () => {
  const sortAll = useSelector((state) => state.tickets.sortAll)
  const sortWithout = useSelector((state) => state.tickets.sortWithout)
  const sortOne = useSelector((state) => state.tickets.sortOne)
  const sortTwo = useSelector((state) => state.tickets.sortTwo)
  const sortThree = useSelector((state) => state.tickets.sortThree)
  const dispatch = useDispatch()

  const handleSortAll = () => {
    dispatch(reducers.ticketsSlice.actions.sortAll())
    dispatch(reducers.ticketsSlice.actions.filtersTickets())
    dispatch(reducers.ticketsSlice.actions.sortTickets())
  }
  const handleSortWithout = () => {
    dispatch(reducers.ticketsSlice.actions.sortWithout())
    dispatch(reducers.ticketsSlice.actions.filtersTickets())
    dispatch(reducers.ticketsSlice.actions.sortTickets())
  }
  const handleSortrOne = () => {
    dispatch(reducers.ticketsSlice.actions.sortOne())
    dispatch(reducers.ticketsSlice.actions.filtersTickets())
    dispatch(reducers.ticketsSlice.actions.sortTickets())
  }
  const handleSortTwo = () => {
    dispatch(reducers.ticketsSlice.actions.sortTwo())
    dispatch(reducers.ticketsSlice.actions.filtersTickets())
    dispatch(reducers.ticketsSlice.actions.sortTickets())
  }
  const handleSortThree = () => {
    dispatch(reducers.ticketsSlice.actions.sortThree())
    dispatch(reducers.ticketsSlice.actions.filtersTickets())
    dispatch(reducers.ticketsSlice.actions.sortTickets())
  }

  return (
    <div className={classes['sort-elements']}>
      <h5 className={classes['sort-header']}>количество пересадок</h5>
      <div className={classes['sort-checkbox']}>
        <Checkbox onChange={handleSortAll} checked={sortAll || (sortWithout && sortOne && sortTwo && sortThree)}>
          Все
        </Checkbox>
        <Checkbox onChange={handleSortWithout} checked={sortWithout}>
          Без пересадок
        </Checkbox>
        <Checkbox onChange={handleSortrOne} checked={sortOne}>
          1 пересадка
        </Checkbox>
        <Checkbox onChange={handleSortTwo} checked={sortTwo}>
          2 пересадки
        </Checkbox>
        <Checkbox onChange={handleSortThree} checked={sortThree}>
          3 пересадки
        </Checkbox>
      </div>
    </div>
  )
}

export default Sort
