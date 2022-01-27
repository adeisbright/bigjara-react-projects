import React, { Component } from "react";

export default class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }
    render() {
        return <h1>Welcome to our Todo APP</h1>;
    }
}
