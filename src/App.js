import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){

    function makeTwoDigits (time) {
      const timeString = `${time}`;
      if (timeString.length === 2) return time
      return `0${time}`
    }
    const now = new Date();

    super();
      this.state = {
        hours :now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
        ampm:  'AM',
        pause: false,
        clickHour:false,
        clickMinute:false,
        clickSecond:false
      }


    setInterval(function(){
      if(this.state.pause == false){

        this.setState({
         seconds:makeTwoDigits(Number(this.state.seconds)+1),
         minutes:makeTwoDigits(Number(this.state.minutes)),
         hours:makeTwoDigits(Number(this.state.hours)),
       })
       console.log("hahaha"+this.state.seconds)
      //  if(this.state.seconds <10){
      //    seconds: makeTwoDigits(this.state.seconds)
      //  }
       if( this.state.seconds >= 60){
         this.setState({
           seconds:this.state.seconds -60,
           minutes: makeTwoDigits(Number(this.state.minutes) +1)
         }) }
         if ( this.state.minutes >= 60){
           this.setState({
             minutes:this.state.minutes -60,
             hours: this.state.hours +1
           })}
           if (this.state.hours >=12){
             this.setState({
               hours:this.state.hours -12,
               ampm: 'PM'
             })
         }

         


      console.log("interval second"+this.state.seconds)}

    }.bind(this),1000);

    }

 
  changeHour = (event) => {
    
    if ( 
      event.target.value >=0 && event.target.value <= 24&&event.target.value){
    this.setState({  
      hours : event.target.value
  });}
  }

  hourKey = (event) =>{
    if(event.key === 'Enter'){
      this.setState({
        pause:false,
        clickHour:false
    });
    
    }
  }

  clickHour(){
    this.setState({clickHour:true,
    pause: true,  clickMinute:false,clickSecond:false

  })
  }

  changeMinutes = (event) => {
        
    if ( 
      event.target.value >=0 && event.target.value <= 60&&event.target.value){
    this.setState({
      
      minutes : Number(event.target.value)

  });}
  }

  minuteKey = (event) =>{
    if(event.key === 'Enter'){

      this.setState({
        minutes :Number( event.target.value),
        pause:false,
        clickMinute:false
    });
    
    }
  }

  clickMinute(){
    this.setState({clickMinute:true,
    pause: true,
  clickHour:false,
clickSecond:false
})
  }





  changeSeconds = (event) => {
    if ( 
      event.target.value >=0 && event.target.value <= 60&&event.target.value){
    this.setState({
          
      seconds : Number(event.target.value)

  });}
  }


  secondKey = (event) =>{
    if(event.key === 'Enter'){
      if (this.state.seconds <0 || this.state.seconds > 60){this.state.seconds = 0}
      this.setState({
         pause:false,
        clickSecond:false
    });
    
    }
  }

  clickSecond(){
    this.setState({clickSecond:true,
    pause: true,  clickMinute:false,clickHour:false})
  }




  render() {
    let clockbody = []
  clockbody.push('clockbody');
  let hour = null;
  if(this.state.clickHour == false){
    hour =    
    <span onClick = {()=>this.clickHour()}>
    {this.state.hours}
  </span>
  }else{
    hour = 
    <input type="number" value={this.state.hours} onChange={(event)=>{this.changeHour(event)}} 
    onKeyDown = {(event) => {this.hourKey(event)}}/>
  }



  let minute = null;
  if(this.state.clickMinute == false){
    minute =    
    <span onClick = {()=>this.clickMinute()}>
    {this.state.minutes}
  </span>
  }else{
    minute = 
    <input type="number" value={this.state.minutes} onChange={(event)=>{this.changeMinutes(event)}} 
    onKeyDown = {(event) => {this.minuteKey(event)}}/>
  }


  let second = null;
  if(this.state.clickSecond == false){
    second =    
    <span onClick = {()=>this.clickSecond()}>
    {this.state.seconds}
  </span>
  }else{
    second = 
    <input type="number" value={this.state.seconds} 
    onChange={(event)=>{this.changeSeconds(event)}} 
    // onChange={(event)=>{second = event.target.value}} 
    onKeyDown = {(event) => {this.secondKey(event)}}
    />
  }




    return (
    <div className="App">
      <header className="App-header">
      <p className = {clockbody} > London clock <br/><br/>  
       {/* <span>
        {this.state.hours}
      </span> */}{hour}
      :
      {/* <span>
        {this.state.minutes}
      </span> */}{minute}
      :
      {/* <span>
        {this.state.seconds}  
      </span> */}{second}
      
      {this.state.ampm}

      </p> 
    
         
      </header>
    </div>
  );
}
}
export default App;
