import React from 'react'
import Demo from './Demo'
import Func_compo from './Component/Func_compo'
import Class_compo from './Component/Class_compo'
import Jsx from './JSX/Jsx'
import Basic_css from './CSS/Basic_css'
import Module_css from './Module_css/Module_css'
import Sass from './Sass/Sass'
import Func_props from './Props/Func/Func_props'
import Class_props from './Props/Class/Class_props'
import Func_state from './State/Func/Func_state'
import Class_state from './State/Class/Class_state'

function App() {
  return (
    <div>

        {            
            // <Demo/>
            
            // component
            //<Func_compo/>
            //<Class_compo/>
            
            //jsx 
            //<Jsx/>

            //css && Module.css && sass
            //<Basic_css/>
            //<Module_css/>
            //<Sass/>


            //Props
            //<Func_props/>
            //<Class_props/>

            //state
            //<Func_state/>
            <Class_state/>
        }
        
    </div>
  )
}

export default App