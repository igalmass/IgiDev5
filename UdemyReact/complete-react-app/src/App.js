import React, { Component } from 'react';
import './App.css'
import Person from './Person/Person';



class App extends Component {
  state = {
    persons: [
      { id: 'asdfds', name: 'Max', age: 31 },
      { id: 'fsdfsdf', name: 'Menu', age: 29 },
      { id: 'dsadsad', name: 'Stephanie', age: 25 }
    ],
    otherState: 'some other value',
    showPersons: false

  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);

    this.setState({ persons: persons });
  }


  togglePersonsHandler = () => {
    console.log('from togglePersonsHandler');
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })



    // this.setState({
    //   persons: [
    //     { id: 'asdas', name: 'Max', age: 28 },
    //     { id: 'dsaddf', name: event.target.value, age: 29 },
    //     { id: 'dsafdsf', name: 'Stephanie', age: 25 }
    //   ]
    // })

  }



  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightGreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons === true) {
      persons = (<div>
        {this.state.persons.map((person, index) => {
          return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}
          />
        })}
      </div>);

      style.backgroundColor = 'red';
      style[":hover"] = {
        backgroundColor: 'salmon',
        color: 'dardgray'

      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      
        <div className="App"  >
          <h1>Hi, I'm a react </h1>
          <p className={classes.join(' ')}>This is realy working</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}


        </div>
      

    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a react 2'));
  }
}

export default App;
