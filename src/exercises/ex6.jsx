import React from 'react';

class New extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
   
    }
    componentDidMount() {
        fetch('http://api.tvmedia.ca/tv/v4/')
        .then(response => response.json())
        .then(json => this.setState({text: json}))
    }

    render() {
        return <h3> {this.state.text} </h3>
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