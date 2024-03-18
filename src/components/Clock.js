import React,{Component} from 'react';
import Clock from 'react-live-clock';
import {Switch} from 'antd';
import moment from 'moment';
import "./Clock.css"

class Time extends Component {
    constructor(props){
        super(props)
        this.state={
            todaysDate:false
        }
    }

    toggleswitch = () => {
        this.setState({
            todaysDate: !this.state.todaysDate
        })
    }
  render(){
    return (
      <div className="Time">
          <div className="navbar">
                ReactClock
                <Switch onClick={this.toggleswitch}/> 
          </div>
        {/* <div className="toggleDate">
          <Switch onClick={this.toggleswitch}/>
        </div> */}
        <div class="time">
        <Clock format={'HH:mm:ss a'} ticking={true} timezone={'GMT+1'} />
        </div>
       
         <div className="toggleDate">
        {this.state.todaysDate ? moment().format('MMMM Do YYYY'): ''}
        </div>
      </div>
    );
  }
  }
  

export default Time;
