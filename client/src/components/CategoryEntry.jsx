import React from "react";
import { useTheme } from "@mui/system";

const Category = ({
  index,
  category,
  sales,
  onCategoryDataChange,
  onRemove,
}) => {
  const theme = useTheme();
  return (
    <div className="category-entry">
      <input type="checkbox" className="category-checkbox" />
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) =>
            onCategoryDataChange(index, "category", e.target.value)
          }
        />
      </label>
      <label>
        Sales:
        <input
          type="number"
          step="0.01"
          value={sales}
          onChange={(e) => onCategoryDataChange(index, "sales", e.target.value)}
        />
      </label>
      <button
        type="button"
        onClick={() => onRemove(index)}
        sx={{ backgroundColor: theme.palette.primary[500] }}
      >
        Remove
      </button>
    </div>
  );
};

export default Category;
