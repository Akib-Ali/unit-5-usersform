import { useState } from "react";
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";

function App() {
  const [show, setShow]= useState(true)
  return (
    <div className="App">
     <button onClick={()=>setShow(show ? false : true) }   className="togglebtn">
       {show ? "Form" : "Table"}
      </button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
        {show ? <ShowStudents/> : <AddStudent/>} 

    </div>
  );
}

export default App;
