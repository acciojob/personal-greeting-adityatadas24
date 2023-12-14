
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
 const [text, setText]= useState("");

 function inputs(e){
  setText(e.target.value)
 }

  return (
    <div>
       <p>Enter your name:</p>
       <form>
        <input onChange={inputs} type="text"/>
       </form>
       <p>{text}</p>
    </div>
  )
}

export default App
