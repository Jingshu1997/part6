
import React from 'react'
import {connect} from 'react-redux'

const Notification = (props) => {
  const style = props.notificaiton? {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }:{display:'none'}

  return (
    <div style={style}>
      render here notification...{props.notificaiton}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}


export default connect(
  mapStateToProps)(Notification)


/* const mapDispatchToProps = {
  filterChange
}


export default connect(
  null, 
  mapDispatchToProps
  )(Filter)
   */