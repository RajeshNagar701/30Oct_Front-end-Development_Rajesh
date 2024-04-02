import React from 'react'
import './mystyle1.css';
import Basic_test from './Basic_test';


function Basic_css() {


  return (
    <div>
        <h1 className='hello'>Hello i am external css 1</h1>
        <h1 className='hello'>Hello i am external css 2</h1>

        <hr />

        <Basic_test/>
    </div>
  )
}

export default Basic_css