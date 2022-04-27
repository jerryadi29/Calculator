import React from 'react'
import Button from './Button';
const Functionality = (props) => {

  const {result,number1,number2,operator,handleNumber,handleOperator,handleResult}=props
  
  const userInput=[ ["%","1/x",7,4,1,"+/-"],["CE","x^2",8,5,2,0],["C","x^1/2",9,6,3,"."],["delete","/","*","-","+","="]];



  return (
    <div className="functonality">
        <Button userInput={userInput} handleNumber={handleNumber} handleOperator={handleOperator} handleResult={handleResult}></Button>
    </div>
  )
}



export default Functionality