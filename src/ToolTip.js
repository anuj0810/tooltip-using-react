import React from 'react';
import ReactTooltip from "react-tooltip"; // React Tooltip is a small library that provides only a tooltip component.
 const ToolTip=(props)=>{   
    return(
    
        <div className="right-block">
            <button style={styles.Button} data-tip data-for="registerTip">
                Register
            </button>
            <ReactTooltip id="registerTip" place={props.position} effect="solid">
                {props.toolTip}
            </ReactTooltip>
        </div>

    );
}

const styles = {
    Button:{
        height:50,
        width:150,
        position:'relative',
        top:100,
        borderRadius:4,
        background:'#ccc'
    }
}

export default ToolTip;