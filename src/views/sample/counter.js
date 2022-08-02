import React, { useState, useEffect } from "react";
import "./counter.scss";
import { Link } from "react-router-dom";

function Counter() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const rootCss = document.querySelector(":root");
    const colors = ["red", "blue", "greed", "brown", "black", "yellow", "orange", "pink", "write", "aqua"];
    let i = Math.round(Math.random() * 10) - 1;
    rootCss.style.setProperty("--color", colors[i]);
  }, [counter]);
  return (
    <>
      <div className='s-align-center s-flex-column'>
        <span>You click count button {counter} time.</span>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
          className='s-custom-color s-button s-aimation-button'
        >
          Count
        </button>
        {/* <div className='s-w100'>
          <div className='s-aimation'>
            <span className='s-triangle'></span>
          </div>
        </div> */}
        <button
          className='s-custom-color s-button s-aimation-button'
        >
          <Link to="/fetch"><span>Fetch</span></Link>
          </button>
          <button
          className='s-custom-color s-button s-aimation-button'
        >
          <Link to="/carousel"><span>Carousel</span></Link>
          </button>
          <button
          className='s-custom-color s-button s-aimation-button'
        >
          <Link to="/validation"><span>Validation</span></Link>
          </button>
      </div>
    </>
  );
}
export default Counter;
