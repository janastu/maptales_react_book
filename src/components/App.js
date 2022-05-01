import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet } from "react-router-dom";
import './App.css';
import Layout from './Layout';
//import Cover from './Cover';
import Node from './Node';


const App = () => {
  return (   
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Node id="0" />} />
        <Route exact path="/:id" element={<Node  />} />
      </Route>
    </Routes>
  );
}



export default App;



