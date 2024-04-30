import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./website/pages/Home";
import About from "./website/pages/About";
import Services from "./website/pages/Services";
import Contact from "./website/pages/Contact";
import Dashboard from "./admin/pages/Dashboard";
import Admin_login from "./admin/pages/Admin_login";
import Add_categories from "./admin/pages/Add_categories";
import Manage_categories from "./admin/pages/Manage_categories";
import Add_blog from "./admin/pages/Add_blog";
import Manage_blog from "./admin/pages/Manage_blog";
import Manage_user from "./admin/pages/Manage_user";
import Manage_contact from "./admin/pages/Manage_contact";

function App() {
  return (
    <BrowserRouter>    
        <Routes>

          {
            // website
          }

          <Route path="/" element={<><Home/></>}></Route>
          <Route path="/about" element={<><About/></>}></Route>
          <Route path="/services" element={<><Services/></>}></Route>
          <Route path="/contact" element={<><Contact/></>}></Route>
          <Route path="*" element={<><h1>Page Not Found</h1></>}></Route>

         
          {
            // admin
          }

          <Route path="/admin-login" element={<><Admin_login/></>}></Route>  
          <Route path="/dashboard" element={<><Dashboard/></>}></Route>  
          <Route path="/add_categories" element={<><Add_categories/></>}></Route> 
          <Route path="/manage_categories" element={<><Manage_categories/></>}></Route> 
          <Route path="/add_blog" element={<><Add_blog/></>}></Route> 
          <Route path="/manage_blog" element={<><Manage_blog/></>}></Route>
          <Route path="/manage_user" element={<><Manage_user/></>}></Route> 
          <Route path="/manage_contact" element={<><Manage_contact/></>}></Route>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
