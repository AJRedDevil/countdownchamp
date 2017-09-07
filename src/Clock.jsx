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
        this.leading0 = this.leading0.bind(this);
    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }
    
    componentDidMount() {
        setInterval(() => {
            this.getTimeUntil(this.props.deadline);
        }, 1000);
    } 

    leading0(num) {
        return num < 10 ? '0' + num : num;
    }

    getTimeUntil(deadline) {
        const time = moment.duration(
            moment(deadline, "MMMM DD, YYYY").diff(moment())
        );
        this.setState({
            days: this.leading0(parseInt(time.asDays(), 10)),
            hours: this.leading0(time.hours()),
            minutes: this.leading0(time.minutes()),
            seconds: this.leading0(time.seconds())
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