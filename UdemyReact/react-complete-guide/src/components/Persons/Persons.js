import React, {Component} from 'react';

import Person from './Person/Person';

class Persons extends Component{
  constructor(props){
    super(props);

    console.log('Persons: in ctor: ', props);
    
  }

  componentWillMount(){
    console.log("Persons: componentWillMount()");
  }

  componentDidMount(){
    console.log("Persons: componentDidMount()");

  }

  shouldComponentUpdate(){
    console.log('Update Persons.js: Inside shouldComponentUpdate');
    return true;
  }

  render(){
    console.log("Persons: inside render()");
    return this.props.persons.map( ( person, index ) => {
        return <Person
          click={() => this.props.clicked( index )}
          name={person.name}
          position={index}
          age={person.age}
          key={person.id}
          changed={( event ) => this.props.changed( event, person.id )} />
      } 
    )
  }
};

export default Persons;
