import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import MDSidebar from './components/MDSidebar';
// import Permissions from './components/Permissions';
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Tabs from "./components/Tabs";
import Teacher from './components/Teacher'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Tabs />}></Route>
          <Route exact path="/Teacher" element={<Teacher />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
