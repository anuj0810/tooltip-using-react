// create-react-app to set up react
import React from 'react';
import './App.css';
import ToolTip from './ToolTip' // import child component

class  App extends React.Component {
  constructor(){
    super();   // need to call super before construtor
    this.state={
          toolTip : "This is register button", // msg which will shows up in tooltip
          position:'top'  // postion of tooltip
    }
}
render(){
    const toolTip = this.state;  // here tooltip has all the this.state properties
     return (
    <div className="App">
      < ToolTip
      toolTip={toolTip.toolTip}  // passing msg 
      position={toolTip.position}  // passing position
  
      />
    </div>
  );
}
}

export default App;
