import   "../components/Calculator.css"
import Functionality from "./Functionality/Functionality"
import Display from "./Display/Display"
import React, { Component,state } from 'react'
import add from "../Results"

export default class Calculator extends Component {
  constructor(){
    super()
    this.state={
      calculation:{
        result:"",
        number1:"",
        number2:"",
        operator:""
      }
    }
    this.handleResult=this.handleResult.bind(this);
    this.handleNumber=this.handleNumber.bind(this);
    this.handleOperator=this.handleOperator.bind(this);
  }

  handleResult(value){


   

    
      this.setState((prevState)=>{
        let newCal={
          result:add(this.state.calculation.number1,this.state.calculation.number2,0),
          number1:this.state.number1,
          number2:this.state.number2,
          operator:this.state.operator,
        }

        return{
          calculation:newCal
        }

       })

       console.log(this.state.calculation)
   
   
  }

  //Handling state for Number1 and Number2
  handleNumber(value){

   
 
  if(Number.isInteger(Number(value)) && this.state.calculation.operator==""){
    this.setState((prevState)=>{
    
      let newCalculation={
        result:this.state.calculation.result,
        number1:prevState.calculation.number1=="0"?""+value:prevState.calculation.number1+value ,
        number2:this.state.calculation.number2,
        operator:prevState.calculation.operator?prevState.calculation.operator:"",
      }
      
      return {
        calculation:newCalculation
      }
         
  })
   
  }
  else if(Number.isInteger(Number(value)) && this.state.calculation.operator!=""){
    
    this.setState((prevState)=>{
      console.log(prevState)
      let newCalculation={
        result:this.state.calculation.result,
        number1: this.state.calculation.number1,
        number2:prevState.calculation.number2=="0"?""+value:prevState.calculation.number2+value,
        operator:prevState.calculation.operator?prevState.calculation.operator:"",
      }
      
      return {
        calculation:newCalculation
      }
         
  })
  }

  console.log(this.state.calculation)
 
  
  }

  // Handling State for Operators and implementing Mathematical operations 
  handleOperator(value){
    
    switch (value){
      case "+":
        this.setState((prevState)=>{
          let newCalculation={
            result:this.state.calculation.result,
            number1: this.state.calculation.number1,
            number2:this.state.calculation.number2,
            operator:"+",
          }
          return {
            calculation:newCalculation
          }
        })

      
        break;
      case "-":
        this.setState((prevState)=>{
          let newCalculation={
            result:this.state.calculation.result,
            number1: this.state.calculation.number1,
            number2:this.state.calculation.number2,
            operator:"-",
          }
          return {
            calculation:newCalculation
          }
        })
        break;
      case "/":
        this.setState((prevState)=>{
          let newCalculation={
            result:this.state.calculation.result,
            number1: this.state.calculation.number1,
            number2:this.state.calculation.number2,
            operator:"/",
          }
          return {
            calculation:newCalculation
          }
        })
        break;
      case "*":
        this.setState((prevState)=>{
          let newCalculation={
            result:this.state.calculation.result,
            number1: this.state.calculation.number1,
            number2:this.state.calculation.number2,
            operator:"*",
          }
          return {
            calculation:newCalculation
          }
        })
        break;
      case "x^1/2":
        this.setState((prevState)=>{
          let newCalculation={
            result:this.state.calculation.result,
            number1: this.state.calculation.number1,
            number2:this.state.calculation.number2,
            operator:"x^1/2",
          }
          return {
            calculation:newCalculation
          }
        })
        break;
      case "x^2":
        this.setState((prevState)=>{
          let newCalculation={
            result:this.state.calculation.result,
            number1: this.state.calculation.number1,
            number2:this.state.calculation.number2,
            operator:"x^2",
          }
          return {
            calculation:newCalculation
          }
        })
        break;
      case "1/x":
        this.setState((prevState)=>{
          let newCalculation={
            result:this.state.calculation.result,
            number1: this.state.calculation.number1,
            number2:this.state.calculation.number2,
            operator:"1/x",
          }
          return {
            calculation:newCalculation
          }
        })
        break;
    }
        
  }

  delete(){

  }

  clearAll(){

  }

  render() {
   
    return (
          <div className="Calculator">
          <Display calculation={this.state.calculation} ></Display>
          <Functionality calculation={this.state.calculation} handleOperator={this.handleOperator} handleNumber={this.handleNumber} handleResult={this.handleResult}></Functionality>
          
          </div>
    )
  }
}

