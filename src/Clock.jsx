import React, { Component } from 'react';
import moment from 'moment';
import './App.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
        this.getTimeUntil = this.getTimeUntil.bind(this);
    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }
    
    componentDidMount() {
        setInterval(() => {
            this.getTimeUntil(this.props.deadline);
        }, 1000);
    } 

    getTimeUntil(deadline) {
        const time = moment.duration(
            moment(deadline, "MMMM DD, YYYY").diff(moment())
        );
        this.setState({
            days: parseInt(time.asDays(), 10),
            hours: time.hours(),
            minutes: time.minutes(),
            seconds: time.seconds()
        });
    }
    
    render() {
        return (
            <div>
                <div className="Clock-days">{this.state.days} days</div>
                <div className="Clock-hours">{this.state.hours} hours</div>
                <div className="Clock-minutes">{this.state.minutes} minutes</div>
                <div className="Clock-seconds">{this.state.seconds} seconds</div>
            </div>
        );
    }
}

export default Clock;