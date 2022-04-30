import React, { useState } from "react";
import "../index.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiPencil, BiTrashAlt } from "react-icons/bi";

const Permissions = () => {
  const [isVisible, setVisible] = useState(true);
  return (
    <>
      <br />

      <div style={{ margin: "auto", display: "inline-block" }}>
        <div style={{ display: "flex" }}>
          <a href className="add-role-button">+ Add Role</a>
          <a href>
            <BiPencil
              size={30}
              style={{ cursor: "pointer", marginLeft: "15px" }}
            />
          </a>
          <a href>
            <BiTrashAlt
              size={30}
              style={{ cursor: "pointer", marginLeft: "15px" }}
            />
          </a>
          <br />
          <br />
        </div>

        <br />
        <div style={{ margin: "auto" }}>
          <table>
            <tr>
              <th>Department / Role Name</th>
              <th>Access Level</th>
              <th>No of members</th>
              <th>Last Updated</th>
              <th></th>
            </tr>
            <tr>
              <td>
                <a  href="/Teacher">Teachers</a>
              </td>
              <td>
                <a href className="all-access-button">All Access</a>
              </td>
              <td>4</td>
              <td>1 min ago</td>
              <td>
                <a href
                  onClick={() => setVisible(!isVisible)}
                  style={{ cursor: "pointer" }}
                >
                  {isVisible ? (
                    <AiOutlineEye size={25} />
                  ) : (
                    <AiOutlineEyeInvisible size={25} />
                  )}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a  href="/Teacher">Teachers</a>
              </td>
              <td>
                <a href className="restricted-access-button">Restricted Access</a>
              </td>
              <td>4</td>
              <td>1 min ago</td>
              <td>
                <a href
                  onClick={() => setVisible(!isVisible)}
                  style={{ cursor: "pointer" }}
                >
                  {isVisible ? (
                    <AiOutlineEye size={25} />
                  ) : (
                    <AiOutlineEyeInvisible size={25} />
                  )}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a  href="/Teacher">Teachers</a>
              </td>
              <td>
                <a href className="restricted-access-button">Restricted Access</a>
              </td>
              <td>4</td>
              <td>1 min ago</td>
              <td>
                <a href
                  onClick={() => setVisible(!isVisible)}
                  style={{ cursor: "pointer" }}
                >
                  {isVisible ? (
                    <AiOutlineEye size={25} />
                  ) : (
                    <AiOutlineEyeInvisible size={25} />
                  )}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a  href="/Teacher">Teachers</a>
              </td>
              <td>
                <a href className="restricted-access-button">Restricted Access</a>
              </td>
              <td>4</td>
              <td>1 min ago</td>
              <td>
                <a href
                  onClick={() => setVisible(!isVisible)}
                  style={{ cursor: "pointer" }}
                >
                  {isVisible ? (
                    <AiOutlineEye size={25} />
                  ) : (
                    <AiOutlineEyeInvisible size={25} />
                  )}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a  href="/Teacher">Teachers</a>
              </td>
              <td>
                <a href className="all-access-button">All Access</a>
              </td>
              <td>4</td>
              <td>1 min ago</td>
              <td>
                <a href
                  onClick={() => setVisible(!isVisible)}
                  style={{ cursor: "pointer" }}
                >
                  {isVisible ? (
                    <AiOutlineEye size={25} />
                  ) : (
                    <AiOutlineEyeInvisible size={25} />
                  )}
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Permissions;
