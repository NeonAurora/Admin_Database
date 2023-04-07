import React, { useState } from "react";

const MonthEntry = ({
  index,
  month,
  totalSales,
  totalUnits,
  onMonthDataChange,
}) => {
  const [editableTotalSales, setEditableTotalSales] = useState(totalSales);
  const [editableTotalUnits, setEditableTotalUnits] = useState(totalUnits);

  return (
    <div className="mont-entry">
      <label>
        Month:
        <input type="text" value={month} readOnly />
      </label>
      <label>
        Total Sales:
        <input
          type="number"
          step="0.01"
          value={editableTotalSales}
          onChange={(e) => {
            setEditableTotalSales(e.target.value);
            onMonthDataChange(index, "totalSales", e.target.value);
          }}
        />
      </label>
      <label>
        Total Units:
        <input
          type="number"
          step="1"
          value={editableTotalUnits}
          onChange={(e) => {
            setEditableTotalUnits(e.target.value);
            onMonthDataChange(index, "totalUnits", e.target.value);
          }}
        />
      </label>
    </div>
  );
};

export default MonthEntry;
