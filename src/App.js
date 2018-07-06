import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';







class CollapseExpand extends Component {
  constructor(props) {
    super(props);
    this.state = {collapse: false}
    this.toggleState = this.toggleState.bind(this);
  }
  toggleState() {
    this.setState({collapse: !this.state.collapse});
  }
  render() {
    return (
      <div onClick={this.toggleState} className={this.state.collapse ? "" : "Collapsed"}>
        {this.props.children}
      </div>
    )
  }
}






function Step(prop) {
  const props = prop.props;
  const conn = props.conn;
  const listConn = conn.map((connItem) =>
    <p key={connItem}>{connItem}</p>
  );
  console.log(listConn);

  return (
    <div className="Collapse">
    <div className="Step">
      <div className="Step-top">
        <div className="Step-goal">
          <p id="step-goal">Step Goal:</p> {props.goal}
        </div>
      </div>
      <div className="Step-middle">
        <p className="Step-text">{props.text}</p>
      </div>
      <div className="Step-bottom">
        <div className="Step-target">
          <p id="target">Target Location:</p>{props.target}<p id="way">Waypoint:</p>{props.waypoint}
        </div>  
        <div className="Step-connections">
          <p id="conn">Connected to:</p>{listConn}
        </div>
      </div>
      </div>
    </div>
  );
}

function StepGroup(props) {
  const listSteps = props.steps.map((step) =>
    <CollapseExpand>
      <Step props={step}/>
    </CollapseExpand>
  );
  return (
    <div className="StepGroup">
        {listSteps}
    </div>
  )
}


const stepOne = {
  conn: ["prison","deep"],
  text: "stepOne",
  target: "Ship Graveyard",
  waypoint: "Yes",
  goal: "Get thing"
}

const stepTwo = {
  conn: ["mudflast","town"],
  text: "stepTwo",
  target: "The Coast",
  waypoint: "Yes",
  goal: "Get waypoint"
}

const steps = [stepOne,stepTwo];

class App extends Component {
  render() {
    return (
      <div className="App">
       <StepGroup steps={steps} /> 
      </div>
    );
  }
}

export default App;
