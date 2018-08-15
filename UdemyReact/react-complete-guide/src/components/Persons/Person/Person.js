import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);

        console.log('Person: in ctor: ', props);

    }

    componentWillMount() {
        console.log("Person: componentWillMount()");
    }

    componentDidMount() {
        console.log("Person: componentDidMount()");
        if (this.props.position === 0) {
            this.inputElement.focus();
        }

    }


    render() {
        return <div className={classes.Person}>
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input
                ref={(inp) => { this.inputElement = inp }}
                type="text"
                onChange={this.props.changed}
                value={this.props.name} />
        </div>
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default Person;