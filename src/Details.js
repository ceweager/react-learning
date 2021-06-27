import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Carousel from './Carousel';


class Details extends Component{
  constructor(){
    super(); // means that the component constructor will get called

    this.state = {loading: true};
  }
  
  async componentDidMount (){ //similar to use effect, gets called once at the beginning of a component getting rendered
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`// compares this.props to the id of the path usiong match. So this.props matches params[:id]
    )
    const json = await response.json();
    this.setState(Object.assign({ // updates the state of the item as well as adds new states
        loading: false,
      }, json.pets[0]) // this parses in all of the json.pets properties to the object, using Object.assign
    );
  }

  render(){
    if (this.state.loading){
      return <h2>Loading</h2>
    }
    const { animal, breed, city, state, description, name, images } = this.state;
    return (
      <div className = "details">
        <Carousel images = {images} />
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
        <button>Adopt {name}</button>
        <p>{description}</p>
      </div>
    )
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary(){
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  )
};