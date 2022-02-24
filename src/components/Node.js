import React from 'react';
import './Node.css';
import { useParams, Link } from 'react-router-dom';


// Function component receives data as props from parent component App
const Node = () => { 
    const nodes = window.nodes;
    const { id } = useParams();
    let nodeForPath;
    id ? nodeForPath = nodes[id] : nodeForPath = 0;
    console.log(window.nodes) 
    return(
        <div className="Node">
            <header className="Node-header">
                Node header
            </header>
            <div className="Node-body">
               Node id:  { id }
               <p>Node content: { nodeForPath.content } </p>
               <Link to={`/${Number(id)+1}`}>
               Next
               </Link>
            </div>
        </div>
    );
}


export default Node;

