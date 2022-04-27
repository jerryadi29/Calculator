import React from 'react'
import "../Functionality/style.css"

export default function Button({userInput,handleNumber,handleOperator,handleResult}) {

    const btnStyle={
        width: "100%",
        height: "100%",
        backgroundColor:"black",
        color:"white"
      }
      const liStyle={
        height: "50%",
        width: "90%",
        margin: "5% 0%"
      }


 const handleClick=(e)=>{
  
  
    
    if(Number.isInteger(Number(e.target.value)))  {
      handleNumber(e.target.value);
    } 
    else if( (e.target.value!=="C" ) &&  (e.target.value!=="CE") && (e.target.value!=="delete")){
      handleOperator(e.target.value);
    } 
   if(e.target.value == "="){
      
      handleResult(e.target.value)
    }
    


  

 
 }


  return (
    <>
      {
     userInput.map((eachrow)=>{
      return(
             <ul style={{height:"20%",width:"30%",listStyle: "none"}}>
                {
                   eachrow.map((item,index)=>{
                       return (
                        <li 
                        style={liStyle}
                        key={index}>
                           <button onClick={handleClick}
                            type="text"
                            style={btnStyle}
                            value={item}>

                             {item}

                            </button>
                         </li>
                             )
                        } )
                      
                }

            </ul>)  
            })
     }
    </>
  )
}
