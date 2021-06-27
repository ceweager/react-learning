import { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
  constructor(){
    super();
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info){
    console.error("ErrorBoundary caught an error", error, info);
  }

  render (){
    if (this.state.hasError){
      return (
        <h1>
          This listing has an error. <Link to = "/"> Click here</Link> to go back to the homepage.
        </h1>
      )
    }
  }
}

ErrorBoundary.getDerivedStateFromError = () => {
  return { hasError: true }
}

export default ErrorBoundary;