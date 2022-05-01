import React from 'react';
import './Node.css';
import { useParams, Link } from 'react-router-dom';


// Function component receives data as props from parent component App
const Node = (props) => { 
   const nodes = window.nodes;
   const { id = 0 } = useParams();
   let nodeForPath;
   if (id < nodes.length) {
        nodeForPath = nodes[id];
   } else {
        nodeForPath = {
            content: "You have encountered an error. Please contact the author of this maptale"
        }
   }
   //id ? nodeForPath = nodes[id] : nodeForPath = 0;
   console.log(window.nodes) 
   //console.log(nodeForPath);
   console.log(props);

    function createMarkup() {
        return { __html: nodeForPath.content }
    }
   return(
        <div className="Node">
            <header className="Node-header">
                Node header
            </header>
            <div className="Node-body">
               Node id:  { id }
                {
                   nodeForPath.audio !== undefined && 
                        <audio controls>
                            <source src={nodeForPath.audio} type="audio/mpeg"></source>
                        </audio>
                }
               <p dangerouslySetInnerHTML={{__html: nodeForPath.content }} />
               <br />
                {
                  nodeForPath.image !== undefined &&
                        <img src={nodeForPath.image} />
                }
               <Link to={`/${Number(id)+1}`}>
               Next
               </Link>
            </div>
        </div>
   );
}

//const HOCNode = withRouter(Node)

export default Node;

