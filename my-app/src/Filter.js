import React, { Component } from 'react';

const flexContainer = {
  background:'tomato',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
};

const flexItem = {
  color: 'white',
  fontSize: '3em',
  textAlign: 'left'
};

// Where to store the data
function nextPage(event){
  {/* Get form data
   Make sure that this data is not modified and is accessed before its written*/}
  window.data = new FormData(event.target.parentNode.parentNode);
}

// Setting Clock
const tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
const tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
function GetClock(){
  var d=new Date();
  var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getYear(),nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;
  var mealtime;

       if(nhour>=0 && nhour <7){mealtime = "CLOSED";}
  else if(nhour>=7 && nhour<10){mealtime = "BREAKFAST";}
  else if(nhour>=10 && nhour<11){mealtime = "CONTINENTAL BREAKFAST";}
  else if(nhour>=11 && nhour<13){mealtime = "LUNCH";}
  else if(nhour>=13 && nhour<17){mealtime = "LITE LUNCH";}
  else if(nhour>=17 && nhour<20){mealtime = "DINNER";}
  else if(nhour>=20 && nhour<23.5){mealtime = "LATE NIGHT";}
  else if(nhour>=23){mealtime = "CLOSED";}
  document.getElementById('mealtime').innerHTML= mealtime;

       if(nhour==0){ap=" AM";nhour=12;}
  else if(nhour<12){ap=" AM";}
  else if(nhour==12){ap=" PM";}
  else if(nhour>12){ap=" PM";nhour-=12;}

  if(nyear<1000) nyear+=1900;
  if(nmin<=9) nmin="0"+nmin;
  if(nsec<=9) nsec="0"+nsec;

  document.getElementById('clockbox').innerHTML=""+tday[nday]+" "+nhour+":"+nmin+":"+nsec+ap+"";
}
window.onload=function(){
  GetClock();
  setInterval(GetClock,1000);
}

function getInitialState(event){
  return {hover:false}
}
function toggleOver(event){
  this.setState({hover: !this.state.hover})
}

class Filter extends Component {
  render() {
    {/*}{getInitialState};
    {toggleOver};
    var linkStyle;
    if (this.state.hover){
      linkStyle = {backgroundColor: 'red'}
    }
    else {
      linkStyle = {backgroundColor: 'blue'}
    }*/}
    return (
      <div>

        <div style={flexContainer}>
            <div style={flexItem} id = "clockbox"></div>
        </div>

        <div style={flexContainer}>
            <div style={flexItem} id = "mealtime"></div>
        </div>

        <form >
          <div style={{...flexContainer, background: 'white', alignItems:'left', padding: '2em'}}>
              <div style={{...flexItem, color: 'black', fontSize: '2em'}} className="input-group">
                <input type="checkbox" name="constraint" value="vegetarian"/>
                Vegetarian
              </div>
              <div style={{...flexItem, color:'black', fontSize: '2em'}} className="input-group">
                <input type="checkbox" name="constraint" value="halal"/>
                Halal
              </div>
              <div style={{...flexItem, color:'black', fontSize: '2em'}} className="input-group">
                <input type="checkbox" name="constraint" value="vegan"/>
                Vegan
              </div>
          </div>

          <div style={{...flexContainer, alignItems: 'center'}}>
            <a href="/#/choices" onClick={nextPage} style={flexItem} >
              Take me to choices!
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Filter;
