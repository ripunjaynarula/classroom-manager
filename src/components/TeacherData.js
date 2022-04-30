import React, { useState } from "react";
import Switch from "react-switch";
import "../index.css";
import { Link } from "react-router-dom";
import {
  BiPencil,
  BiArrowBack,
  BiPlusCircle,
  BiMinusCircle,
} from "react-icons/bi";

const TeacherData = () => {
  const [checked, setChecked] = useState(true);
  const [expand, setExpand] = useState(false);
  const [expanddata, setExpanddata] = useState(true);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  const handleExpand = () => {
    setExpand(!expand);
    setExpanddata(!expanddata);
    return;
  };
  return (
    <>
      <br />

      <div style={{ margin: "auto", display: "inline-block" }}>
        <div style={{ display: "flex" }}>
          <Link to="/">
            <BiArrowBack
              size={30}
              style={{ cursor: "pointer", marginRight: "15px" }}
            />
          </Link>
          <h4 style={{ color: "rgba(254, 13, 13, 1)" }}>Teachers</h4>
          <Link to="/">
            <BiPencil
              size={30}
              style={{ cursor: "pointer", marginLeft: "15px" }}
            />
          </Link>

          <br />
          <br />
        </div>

        <br />
        <div style={{ margin: "auto" }}>
          <table style={{textAlign:'center'}}>
            <tr>
              <th>Department / Role Name</th>
              <th>Access Level</th>
              <th>No of member</th>
              <th>Last Updated</th>
              <th></th>
            </tr>
            <tr className={expand ? "expand" : "tr"}>
              <td>
                <button style={{backgroundColor:'white'}}>
                  {expanddata ? (
                    <BiPlusCircle
                      size={20}
                      style={{ cursor: "pointer"}}
                      onClick={() => handleExpand()}
                    />
                  ) : (
                    <BiMinusCircle
                      size={20}
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand()}
                    />
                  )}
                  Teachers
                </button>
              </td>
              <td>
                <Link to="/"
                  className={checked ? "all-access-button" : "no-access-button"}
                >
                  {checked ? "All Access" : "Restricted Access"}
                </Link>
              </td>
              <td>4
              </td>
              <td>1 min ago</td>
              <td>
                <Switch
                  size={5}
                  onChange={handleChange}
                  checked={checked}
                  className="react-switch"
                />
              </td>
            </tr>
            <tr
              rowspan="4"
              className={expand ? "expanddata" : "hidden"}
              style={{ height: "250px" }}
            >
              <td
                rowspan="4"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  fontSize: "13px",
                }}
              >
                <p style={{ paddingLeft: "10px" }}>
                  All aspects in the financial details module
                </p>
                <div className="rrow" style={{ marginTop: "25px" }}>
                  <div className="ccolumn ">
                    <div
                      style={{ textAlign: "left" }}
                      className="AccessControl"
                    >
                      <h6>Access Control</h6>
                      <br />
                      <div style={{ display: "flex" }}>
                        <input
                          type="radio"
                          id="AllAccess"
                          name="AccessControl"
                          value="AllAccess"
                          style={{ marginTop: "1%",marginRight:"1%" }}
                        />
                        <div>
                          <label for="AllAccess">All Access</label>
                          <p style={{ opacity: "0.5", fontWeight: "200" }}>
                            Can Access all items
                          </p>
                        </div>
                      </div>
                       
                      <br />
                      <div style={{ display: "flex" }}>
                        <input
                          type="radio"
                          id="RestrictedAccess"
                          name="AccessControl"
                          value="RestrictedAccess"
                          style={{ marginTop: "1%",marginRight:"1%" }}
                        />
                        <div>
                          <label for="RestrictedAccess">
                            Restricted Access
                          </label>
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <p style={{ opacity: "0.5", fontWeight: "200" }}>
                              Can Access only assigned<br></br> or created items
                            </p>
                          </div>
                        </div>
                      </div>
                      <br />
                       
                      <br />
                    </div>
                  </div>
                  <div class="ccolumn">
                    <div
                      className="permissions"
                      style={{ textAlign: "left", borderWidth: "0.5px" }}
                    >
                      <h6>Permissions</h6>
                      <br />
                      <input
                        type="checkbox"
                        id="ViewinAccess"
                        name="ViewinAccess"
                        value="ViewinAccess"
                      />
                        <label for="ViewinAccess">View Items in Access</label>
                      <br />
                      <input
                        type="checkbox"
                        id="EditinAccess"
                        name="EditinAccess"
                        value="EditinAccess"
                      />
                        <label for="EditinAccess">Edit Items in Access</label>
                      <br />
                       
                      <br />
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <button style={{backgroundColor:'white'}}>
                  <BiPlusCircle
                    size={20}
                    style={{ cursor: "pointer" }}
                    // onClick={() => handleExpand()}
                  />
                  Teachers
                </button>
              </td>
              <td>
                <Link to="/" className="no-access-button">Restricted Access</Link>
              </td>
              <td>4</td>
              <td>1 min ago</td>
              <td>
                <Switch className="react-switch" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default TeacherData;
