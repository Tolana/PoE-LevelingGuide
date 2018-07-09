import React, { Component } from 'react';
import './App.css';


class EditGuide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: []
    }
  }
  handleClick = () => {
    const groupsNum = this.state.groups.length;
    const group = {
      groupNumber: groupsNum+1
    } 
    const newGroups = this.state.groups.concat(group);
    console.log('newGroups: ',newGroups);
    this.setState(
      {
        groups: newGroups
      },
      function() {
        console.log(this.state.groups);
      }
    )
  }

  deleteGroup = (num) => {
    console.log("BeforeDelete: ",this.state.groups)
    const index = num-1;
    console.log("index: ", index);
    var curGroups = this.state.groups;
    var newGroups = curGroups.splice(index,1);
    this.setState(
      {
        groups: newGroups
      },
      function() {
        console.log(this.state.groups);
      }
    );
  }

  render() {
    const listGroups = this.state.groups.map((Obj) =>
      <div key={Obj.groupNumber} className="editGroup">
        <EditGroup key={Obj.groupNumber} groupNum={Obj.groupNumber} />
        <button onClick={() => this.deleteGroup(Obj.groupNumber)}>
          delete group
        </button>
      </div>
    );
    return (
      <div>
        {listGroups}
        <button onClick={this.handleClick}>
          add Group
        </button>
      </div>
    )
  }
}

class EditGroup extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <p>i return {this.props.groupNum} </p>
    )
  }
}



class EditStep extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Goal:
        <input type="text"></input>
      </label>
    </form>
    )
  }
}


class StorageSlot extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <p> i return </p>
  }
}




class CollapseExpand extends Component {
  constructor(props) {
    super(props);
    this.state = {collapse: false}
  }
  toggleState = () => {
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
       <EditGuide />
      </div>
    );
  }
}

export default App;
