import React from 'react';

export default class Lifecycle extends React.Component {
    componentWillMount() {
        console.log("Component will mount!");
    }

    componentDidMount() {
        console.log("Component did mount!");
        this.getList();
    }

    getList = () => {
        // method to make api call
    };

    render() {
        return (
            <div><h3>Hello mounting methods!</h3></div>
        );
    }
}
