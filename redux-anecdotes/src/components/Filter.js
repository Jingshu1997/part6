import React from 'react'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { filterChange } from '../reducers/FilterReducer'
const Filter = (props) => {
    
    const handleChange = (event) => {
            // input-field value is in variable event.target.value
      props.filterChange(event.target.value)
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
  const mapDispatchToProps = {
    filterChange
  }
  
  
  export default connect(
    null, 
    mapDispatchToProps
    )(Filter)
    

    /* import React from 'react'

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

export default Filter */