import React from "react";
import {useState, useRef} from "react";


function useInput(){
  //First version Boris
  const [value, setValue] = useState("");
  const onChange = (event) => { 
    setValue(event.target.value)
  };
  
  console.log("value, ", value)

  return {
    value,
    onChange
  }

  //My option
  // const [name, setName] = useState("");
  // const [surName, setSurName] = useState("");
  // const [age, setAge] = useState(0);


  // return {
  //   name,
  //   surName,
  //   age,
  //   setName,
  //   setSurName,
  //   setAge,
  // }

}



function App() {
      //Second version Boris
   
      return (
        <form >
          <input 
            type="text"
            placeholder="Name"
            {...useInput()}
          />
        <input 
          type="text"
          placeholder="SurName"
          {...useInput()}
        />
        <input 
          type="number"
          placeholder="age"
          {...useInput()}
        />
        </form>
      );

    // //First version Boris
    // const {value:name, onChange:handleOnchangeName} = useInput();
    // const {value:surName, onChange:handleOnchangeSurName} = useInput();
    // const {value:age, onChange:handleOnchangeAge} = useInput();
 
    // return (
    //   <form >
    //     <input 
    //       type="text"
    //       placeholder="Name"
    //       onChange={handleOnchangeName}
    //       value={name}
    //     />
    //   <input 
    //     type="text"
    //     placeholder="SurName"
    //     onChange={handleOnchangeSurName}
    //     value={surName}
    //   />
    //   <input 
    //     type="number"
    //     placeholder="age"
    //     onChange={handleOnchangeAge}
    //     value={age}
    //   />
    //   </form>
    // );

  //My option
  // const {name,surName,age, setName, setSurName, setAge} = useInput();
  // let inputName =useRef(null);
  // let inputSurName =useRef(null);
  // let inputAge =useRef(null);

  // return (
  //   <form >
  //     <input 
  //       type="text"
  //       placeholder="Name"
  //       ref={inputName}
  //       onChange={() => setName(inputName.current.value)}
  //       value={name}
  //     />
  //   <input 
  //     type="text"
  //     placeholder="SurName"
  //     ref={inputSurName}
  //     onChange={() => setSurName(inputSurName.current.value)}
  //     value={surName}
  //   />
  //   <input 
  //     type="number"
  //     placeholder="age"
  //     ref={inputAge}
  //     onChange={() => setAge(inputAge.current.value)}
  //     value={age}
  //   />
  //   </form>
  // );

}

export default App;
