import React from 'react';
import axios from 'axios';
class One extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            object: []
        }
   
    }
    // axios
        componentDidMount() {
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => { this.setState({ object: response.data })})
        }
            render() {
                return (
                    <div> 
                        <h3> {this.state.object.length && this.state.object[0].name} </h3> 
                    </div>
                       )
    }
}

class Two extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            object: []
        }
   
    }
    // fetch
        componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => this.setState({object: json}));
    }

    render() {
        return (
                <div> 
                    <h3> {this.state.object.title} </h3> 
                </div>
        )
    }
}


export default class App extends React.Component {
    render() {
        return ( 
                <div>
                    <One />
                    <Two />
                </div>
               )
    }
}