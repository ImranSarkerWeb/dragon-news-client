import React from "react";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const Qzone = () => {
  return (
    <div className="bg-light text-center my-4 py-4">
      <img src={qZone1} alt="" />
      <img className="my-4" src={qZone2} alt="" />
      <img src={qZone3} alt="" />
    </div>
  );
};

export default Qzone;
