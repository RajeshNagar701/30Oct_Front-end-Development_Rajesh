/*

React components has a built-in state object.

The state object is where you store property values that belong to the component.

When the state object changes, the component re-renders.

constructor() {
    super();
    this.state = {
      number: "1",
      name:"raj"
    }

    {this.state.number}

    ()=>this.setState(number:this.state.number+1);

    ()=>this.setState(name:"Akash nagar");
*/


import React, { Component } from 'react'
import Image1 from './Image1';
export class Class_state extends Component {

  constructor() {
    super();
    this.state = {
      number: 1,
      name: "Rajesh nagar",
      age: "33",
      isImage: true
    }
  }

  render() {
    return (
      <div className='container mt-5'>
        <button onClick={()=>this.setState({number:this.state.number+1})}>+</button>
        <h1>{this.state.number}</h1>
        <button onClick={()=>this.setState({number:this.state.number-1})}>+</button>
        <hr />
        <button onClick={() => this.setState({name: "Raj Patel", age: "34" })}>Change</button>
        <h1>Hi my name is {this.state.name} and my age is {this.state.age}</h1>
        <hr />

        <button onClick={() => this.setState({isImage: false })}>Hide</button>
        <button onClick={() => this.setState({ isImage: true })}>Show</button>
        <button onClick={() => this.setState({ isImage: !this.state.isImage })}>Hide/Show</button>
        {
          this.state.isImage ? <Image1 /> : null
        }


      </div>
    )
  }
}

export default Class_state

