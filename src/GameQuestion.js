import React from "react";
import { Alert } from 'reactstrap';
function GameQuestion(props){
    return(
        <Alert color="warning" style={{marginRight:75}}>
        {props.question}
      </Alert>
    )
}
export default GameQuestion