import { combineReducers } from 'redux'

import * as reducers from './tickets-reducer'

const rootReducer = combineReducers({
  tickets: reducers.ticketReducer,
  searchId: reducers.searchIdReducer,
})

export default rootReducer
