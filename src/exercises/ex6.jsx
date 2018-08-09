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
            array: []
        }
   
    }
        componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then(response => response.json())
        .then(json => this.setState({array: json}))
    }

    render() {
        return <h3> {console.log(this.state.array[0])} </h3>
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