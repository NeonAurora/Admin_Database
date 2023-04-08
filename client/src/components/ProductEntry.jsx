import React from 'react';
import { useTheme } from '@mui/system';

const ProductEntry = ({ index, productID, onProductDataChange, onRemove }) => {
  const theme = useTheme();
  return (
    <div className="product-entry">
      <input type="checkbox" className="product-checkbox" />
      <label>
        Product ID:
        <input
          type="text"
          value={productID}
          onChange={(e) => onProductDataChange(index, 'productID', e.target.value)}
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

export default ProductEntry;
