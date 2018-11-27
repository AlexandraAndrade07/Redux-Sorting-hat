import React, { Component } from 'react'
import Message from '../Components/Message';
import {connect} from 'react-redux'


class Result extends Component {
  constructor(props){
    super(props)
    setInterval(() =>  this.props.dispatch({ type:  'UPDATE_CHOICE_WITH_MY_INDEX' }), 1000)
        
  }  

  render() {
    console.log(this.props)
    return (
      <div>
        <ul>
        { this.props.houses &&
            this.props.houses.map(house  =>  <li  key={house}>{house}</li>)}
        </ul>
        <Message  message={this.props.selectedHouse}  />
      </div>
    )
  }
}
export default connect(store=>store)(Result)
