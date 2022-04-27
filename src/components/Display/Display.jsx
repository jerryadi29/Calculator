import React,{useRef,useEffect} from 'react'
import  "../Display/display.css"

const Display = (props) => {

  const {result,number1,number2,operator}=props.calculation;
  const value=()=>{
    if(number1){
      return number1+operator+number2
    }
    else if(result){
       return result;
    }
   

  }

  
  const inputref=useRef();

  useEffect(()=>{
      inputref.current.focus()
    })

  return (
  
    <div className="display">

      <input id="inpt"
       type="text" 
       ref={inputref}
        value={value()}/>
    </div>
  )
}

export default Display