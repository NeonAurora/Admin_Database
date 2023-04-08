import React, { useEffect } from "react";

const OverallStat = () => {
  useEffect(() => {
    console.log("OverallStat component mounted");
  }, []);

  return (
    <div style={{ border: "1px solid red", backgroundColor: "lightblue" }}>
      OverallStat
    </div>
  );
};

export default OverallStat;
