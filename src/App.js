import "./App.css";
import React, { useState, useEffect } from "react";


function Home() {
  const[data,setData]=useState([])
  const[records,setRecords]=useState([])

  
  const fetchData = async () => {
    const res = await fetch("https://reqres.in/api/users?page=2");
    const d = await res.json();
    setData(d.data);
    setRecords(d.data);

  }
  useEffect(() => {
    fetchData();
  }, []);

  const Filter =(event) =>  {
    setRecords(data.filter( f  => f.first_name.toLowerCase().includes(event.target.value)
      ))
  }

  return (
    <div className="p-5 bg-light">
      <div className="bg-white shadow border">
   
         
        <center> 
          <h1>GREENDZINE TECHNOLOGIES React Assignment</h1>
        <input type="text" className="search" onChange={Filter} placeholder="Search by FirstName" />
        {records.map((dataObj, index) => {
          return (

            <div key={index} id={index} className="parent-div">
            <div className="block">
              <div className="icon">{dataObj.id}</div>
              <img src={dataObj.avatar} alt="logo" className="image" />
            </div>
              <p style={{ fontSize: 20, color: 'black' }}>{dataObj.first_name}</p>
            </div>
          );
        })}
      </center>
      </div>
    </div>
     
  )

}
export default Home