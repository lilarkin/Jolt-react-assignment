import React, { Component } from 'react';
import './Card.css';
import ReactDom from 'react-dom';
//need to bring in people api for props- GET people... where do I make this route?  
//need to bring in planets api for props - GET planets... where do I make this route?

class Card extends Component {
  constructor() {
    super();

    this.state = {
      //state from people
      name: '',
      birth_year: '',
      homeworld: null
      //state for homeworld: ''
    }
  }

//AJAX?????
  // componentDidMount() {
  //   let root = 'http://localhost:3008';

  //   $.ajax({
  //     url: root + '/people',
  //     method: 'GET',
  //     dataType: 'JSON'
  //   }).done( function (data) {
  //     console.log(data);
  //   });
  // }

  render() {
    return (
      <div className='card'>
        <div className='card-content'>
          	<div className='card-name'>{this.props.people.name}</div>
          	<img src={'http://localhost:3008/' + {this.props.people.name} + '.jpg'} alt='profile'/>
            <p>
                <span>Birthday:</span>
                <span>{this.props.people.birth_year}</span>
            </p>
            <p>
                {/* Note that in order to get the homeworld's name, you have to get the planet name from a different endpoint than the people

                Need to associate id from people to corresponding id in planets */}
                <span>Homeworld:</span>
                <span>{this.props.planets.name}</span>
            </p>
        </div>
    </div>

    );
  }
}

export default Card;
