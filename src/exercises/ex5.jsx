import React from 'react';

class New extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            button: "Click Me",
            text: ""
        }
    }
    handleStartClick = (e) => {
        console.log(e);
    }
    onChangeInput = (e) => {
        this.setState({ text: e.target.value })
    }
    render() {
        return (
                <div>
                    <button onClick={this.handleStartClick}> {this.state.button} </button>
                    <br />
                    <input type="text" placeholder="Type some text" onChange={this.onChangeInput} />
                    <br />
                    <h6> Text from input: {this.state.text} </h6>
                </div>
                )
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