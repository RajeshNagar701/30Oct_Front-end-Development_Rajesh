
/*
React Props

Props are arguments passed into React components.
Props are passed to components via HTML attributes.
React Props are like function arguments in JavaScript and attributes in HTML.
To send props into a component, use the same syntax as HTML attributes:


constructor(props){
        super(props);
        this.data=props;
    }

{this.data.img}

*/


import React, { Component } from 'react'
import Class_props_img from './Class_props_img'


export class Class_props extends Component {
  render() {
    return (
        <div className='container mt-3'>
            <div className='row'>
                <Class_props_img img="https://via.placeholder.com/600/92c952" title="Dixit"  desc="accusamus beatae ad facilis cum similique qui sunt"/>
                <Class_props_img img="https://via.placeholder.com/600/771796" title="Hina"  desc="accusamus beatae ad facilis cum similique qui sunt"/>
                <Class_props_img img="https://via.placeholder.com/600/24f355" title="Vaibhavi"  desc="accusamus beatae ad facilis cum similique qui sunt"/>
                <Class_props_img img="https://via.placeholder.com/600/d32776" title="Ayush"  desc="accusamus beatae ad facilis cum similique qui sunt"/>
            </div>
        </div>
    )
  }
}

export default Class_props
