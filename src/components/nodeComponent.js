import React from 'react';
import axios from "axios";
const NodeComp=(props)=>{
console.log('http://localhost:5000/'+props.dataA)
  axios.get('http://localhost:5000/'+props.dataA).then((aaa)=>console.log(aaa));
  

  return (
  <>
      <h1>Hey</h1>
      <h2>{props.dataA}</h2>
      </>
  );
}

export default NodeComp;