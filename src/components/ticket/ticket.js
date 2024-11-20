import React from 'react'
import { nanoid } from 'nanoid'

import classes from './ticket.module.scss'

const Ticket = ({ ticket }) => {
  // const setTime = (mins) => {
  //   let duration
  //   if (mins < 60) {
  //     duration = `${mins}м`
  //   } else if (mins % 60 === 0) {
  //     duration = `${mins / 60}ч`
  //   } else if (mins % 60 !== 0) {
  //     const hours = Math.floor(mins / 60)
  //     duration = `${hours}ч ${mins - hours * 60}м`
  //   }
  //   return duration
  // }

  const setTime = (mins) => {
    let duration
    switch (mins) {
      case mins < 60:
        duration = `${mins}м`
        break
      case mins % 60 === 0:
        duration = `${Math.floor(mins / 60)}ч`
        break
      default:{
        const hours = Math.floor(mins / 60)
        duration = `${hours}ч ${mins - hours * 60}м`
    }}
    return duration
  }

  const setStops = (num) => {
    let stop
    switch (num) {
      case num === 0:
        stop = 'БЕЗ ПЕРЕСАДОК'
        break
      case num === 1:
        stop = `${num} ПЕРЕСАДКА`
        break
      case num > 1 && num < 5:
        stop = `${num} ПЕРЕСАДКИ`
        break
      default:
        stop = `${num} ПЕРЕСАДОК`
    }
    return stop
  }

  const formatTime = (date, duration) => {
    const startTimeHours = String(new Date(date).getHours())
    const startTimeMins = String(new Date(date).getMinutes())
    const startTimeInMs = new Date(date).getTime()
    const durationInMs = duration * 60 * 1000
    const endTimeInMs = startTimeInMs + durationInMs
    const endTimeInHours = String(new Date(endTimeInMs).getHours())
    const endTImeInMins = String(new Date(endTimeInMs).getMinutes())
    let begin = ''
    let end = ''
    if (startTimeHours.length === 1 && startTimeInMs.length === 1) {
      begin = `0${startTimeHours}:0${startTimeMins}`
    } else if (startTimeHours.length === 1) {
      begin = `0${startTimeHours}:${startTimeMins}`
    } else if (startTimeInMs.length === 1) {
      begin = `${startTimeHours}:0${startTimeMins}`
    } else {
      begin = `${startTimeHours}:${startTimeMins}`
    }
    if (endTimeInHours.length === 1 && endTImeInMins.length === 1) {
      end = `0${endTimeInHours}:0${endTImeInMins}`
    } else if (endTimeInHours.length === 1) {
      end = `0${endTimeInHours}:${endTImeInMins}`
    } else if (endTImeInMins.length === 1) {
      end = `${endTimeInHours}:0${endTImeInMins}`
    } else {
      end = `${endTimeInHours}:${endTImeInMins}`
    }
    return `${begin} - ${end}`
  }
  const formatPrice = (price) => {
    let formattedPrice = ''
    const stringPrice = String(price)
    if (stringPrice.length === 4) {
      formattedPrice = `${stringPrice.slice(0, 1)} ${stringPrice.slice(1)}`
    } else if (stringPrice.length === 5) {
      formattedPrice = `${stringPrice.slice(0, 2)} ${stringPrice.slice(2)}`
    } else if (stringPrice.length === 6) {
      formattedPrice = `${stringPrice.slice(0, 3)} ${stringPrice.slice(3)}`
    }
    return formattedPrice
  }
  const { segments } = ticket
  const ticketInfo = segments.map((info) => {
    const duration = setTime(info.duration)
    const stopsHeader = setStops(info.stops.length)
    const timeDuration = formatTime(info.date, info.duration)
    const stops = info.stops.join(', ')

    return (
      <div className={classes.ticket__list} key={nanoid()}>
        <div className={classes['ticket__list--section']}>
          <p className={classes['ticket__list--info-one']}>
            {info.origin}-{info.destination}
          </p>
          <p className={classes['ticket__list--info-two']}>{timeDuration}</p>
        </div>
        <div className={classes['ticket__list--section']}>
          <p className={classes['ticket__list--info-one']}>В ПУТИ</p>
          <p className={classes['ticket__list--info-two']}>{duration}</p>
        </div>
        <div className={classes['ticket__list--section']}>
          <p className={classes['ticket__list--info-one']}>{stopsHeader}</p>
          <p className={classes['ticket__list--info-two']}>{stops}</p>
        </div>
      </div>
    )
  })
  const finalPrice = formatPrice(ticket.price)
  return (
    <div className={classes.ticket}>
      <div className={classes.ticket__header}>
        <span className={classes.ticket__price}>{`${finalPrice} P`}</span>
        <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt="aviacompany logo" />
      </div>
      <div>{ticketInfo}</div>
    </div>
  )
}

export default Ticket
