
/*
React Props

Props are arguments passed into React components.
Props are passed to components via HTML attributes.
React Props are like function arguments in JavaScript and attributes in HTML.
To send props into a component, use the same syntax as HTML attributes:

function sum({a,b})
{
    
}


*/


import React from 'react'
import Func_props_img from './Func_props_img'

function Func_props() {
    return (
        <div className='container mt-3'>
            <div className='row'>
                <Func_props_img img="https://via.placeholder.com/600/92c952" title="Dixit"  desc="accusamus beatae ad facilis cum similique qui sunt"/>
                <Func_props_img img="https://via.placeholder.com/600/771796" title="Hina"  desc="accusamus beatae ad facilis cum similique qui sunt"/>
                <Func_props_img img="https://via.placeholder.com/600/24f355" title="Vaibhavi"  desc="accusamus beatae ad facilis cum similique qui sunt"/>
                <Func_props_img img="https://via.placeholder.com/600/d32776" title="Ayush"  desc="accusamus beatae ad facilis cum similique qui sunt"/>
            </div>
        </div>
    )
}

export default Func_props