import React from 'react';

class One extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: []
        }
   
    }
        componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => this.setState({array: json}))
    }

    render() {
        return <h3> {this.state.array.length} </h3>
    }
}

class Two extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            object: {}
        }
   
    }
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