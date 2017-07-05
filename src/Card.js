import React, { Component } from 'react';
import './Card.css';
import ReactDom from 'react-dom';
// need to bring in people api for props- GET people
// need to bring in planets api for props - GET planets... where do I make this request?

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {person: []}
  }

// AJAX?????
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

  componentDidMount() {
    this.PersonList();
  }

  PersonList() {
    return $.getJSON('http://localhost:3008/people')
      .then((data) => {
        this.setState({ person: data.results });
      });
  }

  render() {
    const persons = this.state.person.map((person, i) => {
      return (
        <div className='card'>
          <div className='card-content'>
              <div className='card-name'>{person.name}</div>
                <img src={'http://localhost:3008/' + {person.name} + '.jpg'} alt='profile'/>
                <p>
                  <span>Birthday:</span>
                  <span>{person.birth_year}</span>
                </p>
                <p>
                  {/* Note that in order to get the homeworld's name, you have to get the planet name from a different endpoint than the people

                  Need to associate id from people to corresponding id in planets */}
                  <span>Homeworld:</span>
                  <span>{this.props.planets.name}</span>
                </p>
            </div>
        </div>  
      )
    });
    // pagination goes here?
  }
}

export default Card;
