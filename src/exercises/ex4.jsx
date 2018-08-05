import React from 'react';

class LifeCyclesTester extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Imie: Michal",
            surname: "Nazwisko: Wlodarczyk",
            livingToday: "Warsaw",
            livingTomorow: "New York"
        }
    }
    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({ name: this.state.surname, 
                            surname: this.state.name, 
                            livingToday: this.state.livingTomorow 
                        });
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
                <div>
                <h1> {this.state.name} </h1>
                <h1> {this.state.surname} </h1>
                <h1> {this.state.livingToday} </h1>
                </div>

        )
    }
}

class TextTyper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            charIndex: 0,
            newText: ''
        };
    }
    componentDidMount() {
        this.typing = setInterval(() => {
            this.setState({
                newText: this.state.newText + this.props.text.charAt(this.state.charIndex),
                charIndex: ++this.state.charIndex
            });
        }, 100)
    }
    componentWillMount() {
        clearInterval(this.typing);
    }

    render() {
        return <h2>{this.state.newText}</h2>;
    }
}

export default class App extends React.Component {
    render() {
        return ( <div>
                <LifeCyclesTester />
                <TextTyper text="React JS, i'm lovin it!"/>
                </div>
                  )
    }
}