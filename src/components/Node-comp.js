import React, {Component} from 'react';
import './Node.css';
import { useParams, Link } from 'react-router-dom';


// Function component receives data as props from parent component App
//const Node = () => { 
function withRouter(Component) {
    function ComponentWithRouter(props) {
        let params = useParams();
        return <Component {...props} params={params} />
    }
    return ComponentWithRouter;
}

class Node extends React.Component {
    state = {
        id : ""
    }
    constructor(props) {
        super(props);
        this.props = props;
    }
    componentDidMount() {
        this.setState({
            id: this.props.params.id
        })
    }
    static getDerivedStateFromError(nextProps) {
        return {
            id : nextProps.params.id
        }
    }

    render() {
        const nodes = window.nodes;
        //const { id = 0 } = useParams();
        const id = this.state.id;
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
        console.log(this.props);
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
}

const HOCNode = withRouter(Node)

export default HOCNode;

