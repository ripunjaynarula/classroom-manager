import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDSidebar } from "./components/MDSidebar";
import MDNav from "./components/MDNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tabs from "./components/Tabs";
import Teacher from "./components/Teacher";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <MDNav style={{ position: "sticky", zIndex: "5" }} />
          <MDSidebar />

          <Routes>
            <Route exact path="/" element={<Tabs />}/>
            <Route exact path="/Teacher" element={<Teacher />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
