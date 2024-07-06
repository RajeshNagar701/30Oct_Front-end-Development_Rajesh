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
import Home from './Routing/Pages/Home'
import App_Routing from './Routing/App_Routing'
import Basic_boostrap from './Bootstrap/Basic_boostrap'
import React_boostarp from './Bootstrap/React_boostarp'
import MUI from './MUI/MUI'
import Styled_component from './styled_component/Styled_component'
import Class_Life from './Lifecycle/class/Class_Life'
import Func_Life from './Lifecycle/Function/Func_Life'
import Main_lazy from './Lazy_suspense/Main_lazy'
import React_Tailwind from './React_Tailwind/React_Tailwind'
import Tailwind_instalation from './React_Tailwind/Tailwind_instalation'
import Props_drilling from './Props_drilling/Props_drilling'
import UseContext from './useContext/UseContext'
import UseReducer from './UseReducer/UseReducer'
import Mytask from './UseReducer/Mytask'
import React_memo from './React_Memo/React_memo'
import React_useCallback from './React_useCallback/React_useCallback'
import UseRef from './useRef/UseRef'
import UseRef1 from './useRef/UseRef1'

function App() {
  return (
    <div className='container mt-5'>

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
            //<Class_state/>
           
            // Routing
            //<App_Routing/>

            // bootstrap
            //<Basic_boostrap/>
            //<React_boostarp/>

            //<MUI/>
            //<Styled_component/>


            // Lifecycle
            //<Class_Life/>
            //<Func_Life/>


            // lazy loading
            //<Main_lazy/>

            //<React_Tailwind/>
            //<Tailwind_instalation/>


            // Hooks extra
            //<React_memo/>
            //<React_useCallback/>
            //<UseRef/>
            <UseRef1/>
            
            
            // state globaly access
            //<Props_drilling/>
            //<UseContext/>
          
            // useReducer()

            //<UseReducer/>
            //<Mytask/>
        }
        
    </div>
  )
}

export default App