import React from 'react';
import './ErrorBoundary.css';

//Serves to catch unavailable ids in the Router
//Presents a catch all message. 
//TODO: Provide a link to previous node or home node or something like that.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {    // Update state so the next render will show the fallback UI.    
      return { hasError: true };  
  }
  componentDidCatch(error, errorInfo) {    // You can also log the error to an error reporting service    
      //logErrorToMyService(error, errorInfo);  
      console.log(error);
      console.log(errorInfo);
  }
  render() {
    if (this.state.hasError) {      // You can render any custom fallback UI      
        return (
            <div>
                <h1 className="General-error">Something went wrong.</h1>
                <div className="General-error">Please inform the author</div>
            </div>
        );    
    }
    return this.props.children; 
  }
}

export default ErrorBoundary
