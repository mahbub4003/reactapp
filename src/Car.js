import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Car extends React.Component {
    render() {
        return <h2 className="colorred font center"> Hello,,  I am a {this.props.brand.model} car</h2>
    }
}

export default Car;