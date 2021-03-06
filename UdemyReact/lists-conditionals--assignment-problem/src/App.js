import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Validation/Validation';
import Char from './Char/Char'

class App extends Component {
  state = {    
    userInput: "initial hahaha"
  };

  inputChangedHandler = (event) => {
    // const newState = [...this.state];
    // newState['userInput'] = event.target.value;
    // this.setState(newState);
    this.setState({userInput: event.target.value });
  }

  clickTest(){
    console.log('from clickTest');
    var ar = this.state.userInput.split('');
    console.log('array is: ');
    console.log(ar);
  }

  deleteCharHandler(index){
    console.log('handling delete index ' + index);

  }

  render() {
    const charList = this.state.userInput.split('').map((curChar,index) => {
      return <Char theChar={curChar} key={index} click={() => this.deleteCharHandler(index)} />
    });


    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr/>

        <input type="text" value={this.state.userInput} onChange={ this.inputChangedHandler } />
        <p onClick={this.clickTest.bind(this)}>Text length: { this.state.userInput }</p>
        <ValidationComponent theTextLength = {this.state.userInput.length} ></ValidationComponent>
        <div>
        {charList}
        </div>

      </div>

    );
  }
}

export default App;
