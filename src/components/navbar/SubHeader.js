import React from "react";
import "./navbar.css";
import { CiLocationOn, CiFlag1, CiSun } from "react-icons/ci";
import { useLocation } from "react-router-dom";

function SubHeader() {
  const { pathname } = useLocation();

  if (pathname.includes("Krish")) {
    return <></>;
  }
  return (
    <div className="subheader">
      <div className="container">
        <div className="subheader-wrapper">
          <div className="subheader-item">
            <p>
              <CiLocationOn />
              <span>
                Shahar: <a href="">Toshkent</a>
              </span>
            </p>
          </div>

          <div className="subheader-item">
            <p>Topshirish Punktlari</p>
          </div>

          <div className="subheader-item">
            <p>Buyumlaringizni 1 kunda yetkazib beramiz</p>
          </div>

          <div className="subheader-item">
            <p>Uzumda Soting</p>
          </div>

          <div className="subheader-item">
            <p>Savol-javoblar</p>
          </div>

          <div className="subheader-item">
            <p>Buyurtmalarim</p>
          </div>

          <div className="subheader-item">
            <p>
              <CiFlag1 />
              <select>
                <option value="O'zbekcha">O'zbekcha</option>
                <option value="Rushcha">Ruscha</option>
              </select>
            </p>
          </div>

          <div className="subheader-item">
            <p>
              <CiSun />
              <select>
                <option value="Yorqin">Yorqin</option>
                <option value="Qorong'i">Qorong'i</option>
              </select>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
