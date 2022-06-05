//import { createStore, combineReducers } from 'redux'

import { configureStore } from '@reduxjs/toolkit'
import anecdoteService from './services/anecdotes'
import anecdoteReducer, { setAnecdotes  } from './reducers/anecdoteReducer'
import filterReducer from './reducers/FilterReducer.js'
import notificationReducer from './reducers/NotificationReducer'

  const store = configureStore({
    reducer: {
       anecdotes: anecdoteReducer,
      filter: filterReducer,
      notification: notificationReducer
    }
  })
  anecdoteService.getAll().then(anecdotes =>
      store.dispatch(setAnecdotes(anecdotes))
  )
  export {store}