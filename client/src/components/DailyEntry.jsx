import React, { useState } from 'react';

const DailyEntry = ({ index, date, totalSales, totalUnits, onDailyDataChange }) => {
  const [editableDate, setEditableDate] = useState(date);
  const [editableTotalSales, setEditableTotalSales] = useState(totalSales);
  const [editableTotalUnits, setEditableTotalUnits] = useState(totalUnits);

  return (
    <div className="daily-entry">
      <label>
        Date:
        <input
          type="date"
          value={editableDate}
          onChange={(e) => {
            setEditableDate(e.target.value);
            onDailyDataChange(index, "date", e.target.value);
          }}
        />
      </label>
      <label>
        Total Sales:
        <input
          type="number"
          step="0.01"
          value={editableTotalSales}
          onChange={(e) => {
            setEditableTotalSales(e.target.value);
            onDailyDataChange(index, "totalSales", e.target.value);
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
            onDailyDataChange(index, "totalUnits", e.target.value);
          }}
        />
      </label>
    </div>
  );
};

export default DailyEntry;
