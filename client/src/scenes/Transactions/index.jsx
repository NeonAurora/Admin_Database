import React, { useEffect } from "react";

const Transaction = () => {
  useEffect(() => {
    console.log("Transaction component mounted");
  }, []);

  return (
    <div style={{ border: "1px solid green", backgroundColor: "lightyellow" }}>
      Transaction
    </div>
  );
};

export default Transaction;
