import { useState } from "react";
import "./Tabs.css";
import { BiWifi } from "react-icons/bi";
import { AiOutlineTable } from "react-icons/ai";
import Permissions from "./Permissions";



function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="tabcontainer">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <BiWifi
                className="wifiicon"
                size={30}
                style={{ marginTop: "-5px" }}
                rotate={45}
              />&nbsp;Permissions
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <AiOutlineTable
                size={30}
                style={{ marginTop: "-5px" }}
              /> &nbsp;Approval Matrix
        </button>
        
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
         <Permissions/>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Lorem</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        
      </div>
    </div>
  );
}

export default Tabs;