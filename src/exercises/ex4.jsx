import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Jacek",
            surmane: "Kowalski"
        }
    }
render() {
    return ( 
            <span>
             <button> {this.props.name} </button>
             <button> {this.state.name} </button>
            </span>
            )
    }    

}


export default class App extends React.Component {
    render() {
        return ( <div>
                <Button name = "Michal"/>
                <br />
                <Button name = "Wlodarczyk" />
                </div>
                  )
    }
}