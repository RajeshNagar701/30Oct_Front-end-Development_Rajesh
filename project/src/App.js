import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Home/></>}></Route>
          <Route path="/about" element={<><About/></>}></Route>
          <Route path="/services" element={<><Services/></>}></Route>
          <Route path="/contact" element={<><Contact/></>}></Route>
          <Route path="*" element={<><h1>Page Not Found</h1></>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
