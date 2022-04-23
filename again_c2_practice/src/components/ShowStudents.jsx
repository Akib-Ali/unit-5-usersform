import axios from "axios";
import { useEffect, useState } from "react";

export const ShowStudents = () => {

const[array,setArray]= useState([])
const[data,setData]=useState([])

useEffect(()=>{
 getdata()
},[])


const getdata=()=>{
  axios.get(`  http://localhost:8080/students`).then(res=>{
    setData(res.data)
  })
}
  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort">sort</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}



          {data.map((students,index)=>{
            return(
              <tr className="row">
            <td className="first_name"> {students.first_name}</td>
            <td className="last_name">  {students.last_name}</td>
            <td className="email">  {students.email}</td>
            <td className="gender">  {students.gender}</td>
            <td className="age">  {students.age}</td>
            <td className="tenth_score">  {students.tenth_score}</td>
            <td className="twelth_score">  {students.twelth_score}</td>
            <td className="preferred_branch">  {students.preferred_branch}</td>
          </tr>


            )

          })}
                 </tbody>
      </table>
    </div>
  );
};
