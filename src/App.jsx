import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 27, 2017',
            newDeadline: ''
        };
        this.changeDeadline = this.changeDeadline.bind(this);
    }

    changeDeadline() {
        this.setState({
            deadline: this.state.newDeadline
        });
    }
    
    render() {
        return (
            <div className="App">
                <div className="App-title">
                    Countdown to {this.state.deadline}
                </div>
                <Clock
                    deadline={this.state.deadline}
                />
                <div>
                    <input
                        type="text"
                        placeholder="new date"
                        onChange={event =>  this.setState({newDeadline: event.target.value})}
                    />
                    <button onClick={this.changeDeadline}>Submit</button>
                </div>
            </div>
        );
    }
}

export default App;