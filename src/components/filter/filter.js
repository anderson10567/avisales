import React from 'react'
import { Radio } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

import * as reducers from '../../redux/reducer/tickets-reducer'

import classes from './filter.module.scss'

const Filter = () => {
  const dispatch = useDispatch()
  const sliceNumber = useSelector((state) => state.tickets.sliceNumber)
  const isLoading = useSelector((state) => state.tickets.isLoading)
  const onChangeFilter = ({ target: { value } }) => {
    if (value === 'САМЫЙ ДЕШЁВЫЙ') {
      dispatch(reducers.sortCheap())
      dispatch(reducers.filtersTickets())
      dispatch(reducers.sortTickets())
      dispatch(reducers.sliceTickets(sliceNumber || 5))
    } else if (value === 'САМЫЙ БЫСТРЫЙ') {
      dispatch(reducers.sortFast())
      dispatch(reducers.filtersTickets())
      dispatch(reducers.sortTickets())
      dispatch(reducers.sliceTickets(sliceNumber || 5))
    }
  }
  const radioOptions = [
    {
      label: 'САМЫЙ ДЕШЁВЫЙ',
      value: 'САМЫЙ ДЕШЁВЫЙ',
    },
    {
      label: 'САМЫЙ БЫСТРЫЙ',
      value: 'САМЫЙ БЫСТРЫЙ',
    },
  ]

  return (
    <div className={classes.filter}>
      <Radio.Group
        block
        size="large"
        options={radioOptions}
        optionType="button"
        buttonStyle="solid"
        defaultValue="САМЫЙ ДЕШЁВЫЙ"
        onChange={onChangeFilter}
      />
      {isLoading ? (
        <div>
          <span className={classes.loading} />
          <p className={classes.information}>Search tickets...</p>
        </div>
      ) : null}
    </div>
  )
}

export default Filter
