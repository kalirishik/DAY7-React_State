import { useState} from 'react';
function App(){
  const [header,setHeader]=useState("WELCOME TO MERN STACK COURSE");
  function changeHeader(e){
      e.preventDefault();
      let p=prompt("Enter the Header:");
      if(p)
        setHeader(p);
  }
  const btnStyle1={
    backgroundColor:'aqua',
    color:'black',
    borderRadius:5,
    fontSize:15,
    margin:5,
  }
  const btnStyle2={
    backgroundColor:'black',
    color:'white',
    borderRadius:5,
    fontSize:15,
  }
  return(
    <div style={{margin:300}}>
      <center>
        <h1>{header}</h1>
        <button style={btnStyle1} onClick={()=>setHeader("WELCOME TO REACTJS")}>CLICK TO REACTJS</button>
        <button style={btnStyle1} onClick={()=>setHeader("WELCOME TO NODEJS")}>CLICK TO NODEJS</button>
        <button style={btnStyle1}onClick={()=>setHeader("WELCOME TO EXPRESSJS")}>CLICK TO EXPRESSJS</button><br/><br/>
        <button  style={btnStyle2} onClick={(e)=>changeHeader(e)}>CLICK TO CHANGE THE HEADER</button>
      </center>
    </div>
  );
}
 export default App;
