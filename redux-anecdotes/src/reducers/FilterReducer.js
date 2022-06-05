import React from 'react'

const filterReducer = (state = '', action) => {
  switch(action.type){
      case 'SET_FILTER':
          return action.filter
      default:
          return state
  }
}

export const filterChange = filter => {
  return {
    type: 'SET_FILTER',
    filter
  }
}

export default filterReducer


/* 
filter part 
const Filter = () => {
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter
 */