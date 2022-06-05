import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { useEffect } from 'react'
import { initializeAnecdotes, setAnecdotes } from './reducers/anecdoteReducer'


const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes()) 
  },[dispatch]) 
/* 
  const vote = (id) => {
    console.log('vote', id)
  } */

  return (
    <div>
      <h2>Anecdotes</h2>
     <Filter/>
     <Notification/>
     <AnecdoteForm/>
     <AnecdoteList/>
     
    </div>
  )
}

export default App