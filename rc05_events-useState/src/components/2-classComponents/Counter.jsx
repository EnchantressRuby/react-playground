import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        // state starting value
        this.state = { count: 0 }

        // connecting the dec method to the counter class(bind)
        this.decrement = this.decrement.bind(this)
    }

    increment = () => {
        this.setState
            ({ count: this.state.count + 1 })
    }

    decrement() {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <div>
                <h2>Class Component</h2>
                <h3>Count: {this.state.count}</h3>
                <button onClick={this.increment} className="btn btn-primary">Increase</button>
                <button onClick={()=>this.setState({count: 0})} className="btn btn-warning">Reset</button>
                <button onClick={this.decrement} className="btn btn-danger">Decrease</button>
                {/* <button onClick={this.decrement.bind(this)} className="btn btn-danger">Decrease</button> */}
            </div>
        )
    }
}

export default Counter