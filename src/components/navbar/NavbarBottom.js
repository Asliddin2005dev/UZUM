import React from "react";
import { useLocation } from "react-router-dom";

function NavbarBottom() {
  const data = [
    "Muddatli to'lov",
    "Arzon narxlar",
    "Elektronika",
    "Maishiy texnika",
    "Kiyim",
    "Poyabzallar",
    "Aksessuarlar",
    "Go'zalik va parvarish",
    "Salomatlik",
    "Uy-ro'zg'or buyumlari",
  ];

  const { pathname } = useLocation();

  if (pathname.includes("Krish")) {
    return <></>;
  }

  return (
    <div className="navbar-bottom container">
      {data.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
}

export default NavbarBottom;
