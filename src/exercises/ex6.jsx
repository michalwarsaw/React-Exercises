import React from 'react';

class New extends React.Component {
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

export default class App extends React.Component {
    render() {
        return ( 
                <div>
                    <New />
                </div>
               )
    }
}