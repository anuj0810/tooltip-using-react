// create-react-app
import React from 'react';
import './App.css';
import ToolTip from './ToolTip'

class  App extends React.Component {
  constructor(){
    super();
    this.state={
          toolTip : "This is register button",
          position:'top'
    }
}
render(){
    const toolTip = this.state; 
     return (
    <div className="App">
      < ToolTip
      toolTip={toolTip.toolTip}
      position={toolTip.position}
  
      />
    </div>
  );
}
}

export default App;
