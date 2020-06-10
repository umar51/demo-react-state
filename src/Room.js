import React, {useState} from 'react';
import './Room.css';


function Room() {
    let [islit, setlit] = useState(true);
    let [age, setAge] = useState(23);
    let [lightstatus, lightfunc] = useState(true);
    let [temp, tempfunc] = useState(72);
   //const state = useState(true);
     //const islit = state[0];
     //const setlit = state[1]; 
    //  function updatelit() {
    //      console.log("Button clicked");
    //      setlit(!islit);

    //  } used the shorter form of func at calling place
     function increaseAge() {
      
        console.log("Increase age Button clicked");
           setAge(age++);
  
       }



    return (
      
   <div className={'room ${islit ? "lit":"dark"}'}>
     This is room component, Lit : {islit ? "Lit" : "Dark"}
     <br/>
     <button onClick={()=> {
         console.log("Button clicked");
         setlit(!islit);

     }}>Toggle light</button>
  
     <br/>
     Age = {age}
     <button onClick={()=> {
      
      console.log("Increase age Button clicked");
         setAge(++age);

     } }> Increase the Age</button>
     <br/>
     <br/>
     <br/>
     <p> Light status : {lightstatus ? "on" : "off" }</p>

     <button onClick={()=> {
       lightfunc(lightstatus=true); 

     }
     }>ON</button>
     <button onClick={()=> {
       lightfunc(lightstatus=false); 

     }
     }>OFF</button>
     
     <p>Current room temperature is : {temp}</p>
     <button onClick={ ()=> {
       tempfunc(++temp );
     }

     }>+</button>
     <button onClick={ ()=> {
       tempfunc(--temp );
     }

     }>-</button>
     


   </div>
  );
}

export default Room;
