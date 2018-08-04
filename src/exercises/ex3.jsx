import React from 'react';

class Button extends React.Component {
    render() {
        return <button> {this.props.buttonText} </button>;
    }
}

class Message extends React.Component {
    render() {
        return (
            <div>
                <p> {this.props.messageText} </p>
                <Button buttonText="Tak" />
                <Button buttonText = "Nie" />
            </div>
        )
    }
}

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Message messageText = "Czy lubisz React?" />
                <br />
                <Message messageText = "Czy umiesz stosowac propsy?" />
                <br />
                <Button buttonText = "Zaloguj" />
                <Button buttonText = "Zarejestruj" />
            </div>
               )
    }
}