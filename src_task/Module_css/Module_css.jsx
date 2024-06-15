
/*
CSS Modules

Another way of adding styles to your application is to use CSS Modules.

CSS Modules are convenient for components that are placed in separate files.

Create the CSS module with the .module.css extension, 

example: mystyle.module.css.
import '/style.css'
class="hello"

import A from './mystyle.module.css'
class={A.hello}

*/

import React from 'react'

//import './style.css' // load normal css

import ST1 from './st1.module.css'
import ST2 from './st2.module.css'


function Module_css() {
  return (
    <div>
        <h1 className={ST1.bigblue}> Hi i am module css from ST1 </h1>
        <h1 className={ST2.bigblue}> Hi i am module css from ST2 </h1>
    </div>
  )
}

export default Module_css