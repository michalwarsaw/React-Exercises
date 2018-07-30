import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            totalCounter: 0,
            doubleCounter: 0
        }
    }
    increment() {
        this.setState({
            counter: this.state.counter + 1,
            totalCounter: this.state.totalCounter +1
          })
    }
    decrement() {
        this.setState({
            counter: this.state.counter - 1,
            totalCounter: this.state.totalCounter + 1
          })
    }
    dbClicks() {
        this.setState({
            doubleCounter: this.state.doubleCounter + 1
        })
    }
    
    render() {
        const counter = this.state.counter;
        const totalCounter = this.state.totalCounter;
        const doubleCounter = this.state.doubleCounter;
        return (
                <div className="container">
                    <button onClick={this.increment.bind(this)} onDoubleClick={this.dbClicks.bind(this)}>+</button>
                    <output>{counter}</output>
                    <button onClick={this.decrement.bind(this)} onDoubleClick={this.dbClicks.bind(this)}>-</button>
                    <br />
                    <output>Total Click: {totalCounter}</output>
                    <br />
                    <output>Double Click: {doubleCounter}</output>                 
                </div>
                  )
    }
}