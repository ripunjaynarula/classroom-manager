import React, { useState } from "react";
import "./Sidebar.css";
import { BiShieldQuarter, BiBriefcase } from "react-icons/bi";
import { AiFillProject } from "react-icons/ai";

export const MDSidebar = () => {
  const [isOpen, setOpen] = useState(true);
  const [isProject, setProject] = useState();
  const [isClassroom, setClassroom] = useState();
  const [isPermission, setPermission] = useState(true);

  return (
    <>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="sidenav"
        id={isOpen ? `open` : `close`}
      >
        <a href="/" onClick={()=>setProject(true)} className={isProject?"active":""}>
          <AiFillProject size={20} style={{ marginTop: "0px" }} />
          &nbsp;<span className="name">Projects</span>
        </a>
        <a href="/" onClick={()=>setClassroom(true)} className={isClassroom?"active":""}>
          <BiBriefcase size={20} style={{ marginTop: "0px" }} />
          &nbsp;<span className="name">Classrooms</span>
        </a>
        <a href="/" onClick={()=>setPermission(true)} className={isPermission?"active":""}>
          <BiShieldQuarter size={20} style={{ marginTop: "0px" }} />
          &nbsp;<span className="name">Permissions</span>
        </a>
      </div>
    </>
  );
};
