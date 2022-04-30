import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDSidebar } from './components/MDSidebar';
import MDNav from './components/MDNav';
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Tabs from "./components/Tabs";
import Teacher from './components/Teacher'

function App() {
  return (
    <>
    <MDNav style={{position:'sticky',zIndex:"5"}}/>
    <div>
    <MDSidebar/>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Tabs />}></Route>
          <Route exact path="/Teacher" element={<Teacher />}></Route>
        </Routes>
    </BrowserRouter>
      </div>
    </>
    
  );
}

export default App;
