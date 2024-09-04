import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        // state starting value
        this.state = { count: 0 }
    }
    render() {
        return (
            <div>
                <h2>Class Component</h2>
                <h3>Count: {this.state.count}</h3>
            </div>
        )
    }
}

export default Counter