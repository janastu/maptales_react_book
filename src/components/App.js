import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet } from "react-router-dom";
import './App.css';
import Layout from './Layout';
import Cover from './Cover';
import Node from './Node';


// App logic, data fetch and routing setup
const App = () => {

  // react hooks to set state
  const [data, setData] = useState([]);

  useEffect(()=>{
      getData()
    },[]);

  // Fetch data
  const getData = () => {
    fetch("nodes.json").then((nodesFile) => {
        return nodesFile.json();
    }).then((response) => {
        //console.log(response);
        setData(response);
    });
  }

  return (   
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Cover />} />
        <Route exact path="/:id" element={data.length && <Node nodes={data} />} />
      </Route>
    </Routes>
  );
}



export default App;



