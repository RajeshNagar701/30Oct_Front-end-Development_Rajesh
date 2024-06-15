/*
Lifecycle of Components
Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

The three phases are: 

Mounting,   componentDidMount()
Updating, and  componentDidUpdate()
Unmounting.    componentWillUnmount()

*/


import React, { Component } from 'react'
import Class_imglife from './Class_imglife'

export class Class_Life extends Component {

    componentDidUpdate() {
        console.log('Image componentDidUpdate Update')
    }

    constructor(state) {
        super();
        this.state = {
            isImage: true,
            number: 0
        }
    }

    render() {
        return (
            <div>
                <h1>Hi i am Class Component Life Cycle</h1>

                <button onClick={() => this.setState({ isImage: false })}>Hide</button>
                <button onClick={() => this.setState({ isImage: true })}>Show</button>
                {this.state.isImage ? <Class_imglife /> : null}

                <hr />

                <button onClick={() => this.setState({ number: this.state.number+1 })}>+</button>
                <h1>{this.state.number}</h1>
                <button onClick={() =>  this.setState({ number: this.state.number-1 })}>-</button>


            </div>
        )
    }
}

export default Class_Life