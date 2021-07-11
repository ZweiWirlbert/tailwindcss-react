import React from "react";
import ImageOne from "../images/egg-1.jpg";
import ImageTwo from "../images/egg-2.jpg";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img src={ImageOne} alt="egg dish" className="item-image" />
        <div className="item-content">
          <h2>Egg Dishes</h2>
          <p>Delicious, nutritious and a lot of proteins</p>
          <span>$16</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImageTwo} alt="egg muffin" className="item-image" />
        <div className="item-content">
          <h2>Egg Muffins</h2>
          <p>Cripsy, delicious and nutritious</p>
          <span>$20</span>
        </div>
      </div>
    </>
  );
};

export default Content;
