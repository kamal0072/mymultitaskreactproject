import React from 'react';

function Plan(props) {
    return (
        <div style={{display: 'flex', gap : '10px', alignItems : "center"}}>
            <li key={props.id}>{props.id+1} {props.items}{" - added on - "+(props.dt)}</li>
            <button className='btn btn-danger my-2 col-sm-2 offset-2' onClick={()=>{props.sendData(props.id)}}>X</button>
        </div>
    );
}

export default Plan;