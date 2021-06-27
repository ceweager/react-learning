import { Component } from 'react';

class Carousel extends Component{
  constructor(){
    super();
    this.state ={
      active: 0
    };
  };

  handleIndexClick = (event) =>{
    this.setState({
      active: +event.target.dataset.index
    })
  }

  render(){
    const {active} = this.state;
    const {images} = this.props;

    return(
      <div className = "carousel">
        <img src = {images[active]} alt = "animal" />
        <div className = "carousel-smaller">
          {images.map((photo, index)=>(
            <img
              key = {photo}
              src = {photo}
              data-index = {index}
              onClick = {this.handleIndexClick}
              className = {index === active? "active" : ""}
              alt = "animal thumbnail"
            />
          ))}
        </div>
      </div>
    )
  }
}


Carousel.defaultProps = {
  images: ['http://pets-image.dev-apis.com/pets/none.jpg']
}

export default Carousel;