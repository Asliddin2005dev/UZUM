import React from "react";
import { useParams } from "react-router-dom";
import { DATA } from "../../static/index";
import "./SingleRoute.css";
import { useState } from "react";

function SingleRoute() {
  const [count, setCount] = useState(0);

  const param = useParams();
  console.log(param);
  const item = DATA.find((item, index) => item.id === param.id);
  console.log(item);

  return (
    <>
      <div className="singleroute-container container">
        <div className="SingleRoute">
          <img src={item.url[0]} width={400} alt="" />
          <div className="singleroute-info">
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <div className="btn">
              <button onClick={() => setCount(count - 1)}>-</button>
              <span>{count}</span>
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleRoute;
