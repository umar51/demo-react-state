import React, {useState} from 'react';


function Room() {
    let [islit, setlit] = useState(true);
    let [age, setAge] = useState(23);
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
      
   <div>
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
   </div>
  );
}

export default Room;
