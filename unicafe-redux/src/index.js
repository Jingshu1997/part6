import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {

  console.log(store.getState())

  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }

  console.log(store.getState())
  const ok = () => {
    store.dispatch({
      type: 'OK'
    })
  }
  console.log(store.getState())
  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }
  console.log(store.getState())
  const zero = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }
  console.log(store.getState())


  return (
    <div>
      <button onClick={good}>good</button> 
      <button onClick={ok}>ok</button> 
      <button onClick={bad}>bad</button>
      <button onClick={zero}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
