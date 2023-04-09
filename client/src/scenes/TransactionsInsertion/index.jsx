import React, { useState, useEffect } from "react";
import transactionService from "services/transactionService";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/system";
import ProductEntry from "components/ProductEntry";
import { v4 as uuidv4 } from "uuid";

const TransactionsInsertion = () => {
  const [userId, setuserId] = useState("");
  const [cost, setCost] = useState("");
  const [products, setProducts] = useState([]);
  const [transactionData, setTransactionData] = useState({});
  const theme = useTheme();
  const [audioFile, setAudioFile] = useState(null);

  const updateTransactionData = () => {
    setTransactionData({
      userId,
      cost,
      products,
    });
  };

  useEffect(() => {
    setTransactionData({
      userId: userId,
      cost: cost.toString(),
      products: products,
    });
  }, [userId, cost, products]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentTransactionData = {
      userId,
      cost: cost.toString(),
      products,
    };
    console.log("Submitting transaction data:", currentTransactionData);

    // Create a FormData object and append the audio file
    const formData = new FormData();
    formData.append("audio", audioFile);

    // Append the transaction data as a JSON string
    formData.append("transactionData", JSON.stringify(currentTransactionData));

    try {
      const response = await transactionService.addTransaction(formData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleProductChange = (id, field, value) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) => {
        if (product.id === id) {
          return { ...product, [field]: value };
        }
        return product;
      });
      return updatedProducts;
    });
  };

  const removeProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const createProductEntry = () => {
    const entry = {
      id: products.length,
      productID: "",
    };
    setProducts((prevProducts) => {
      if (prevProducts.length === 0) {
        return [entry];
      } else {
        return [...prevProducts, entry];
      }
    });
  };

  const handleEntryTest = () => {
    setuserId(uuidv4());
    setCost(getRandomInt(100, 1000));

    const randomProductCount = getRandomInt(1, 5);
    const randomProducts = [...Array(randomProductCount).keys()].map((i) => ({
      id: i,
      productID: `P-${uuidv4()}`,
    }));

    setProducts(randomProducts);
  };

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <Box
      className="App"
      sx={{
        backgroundColor: theme.palette.primary[600],
        color: theme.palette.secondary[300],
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <Box component="form" width="100%">
        <Typography variant="h6">User ID:</Typography>
        <TextField
          type="text"
          value={userId}
          onChange={(e) => setuserId(e.target.value)}
          fullWidth
        />

        <Typography variant="h6">Cost:</Typography>
        <TextField
          type="number"
          step="0.01"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          fullWidth
        />

        <Box
          id="product-entries"
          sx={{
            backgroundColor: theme.palette.primary[400],
            borderRadius: "0.55rem",
            padding: "1rem",
            marginTop: "1rem",
          }}
        >
          <Typography variant="h5">Products</Typography>
          <Box id="product-entries-container">
            {products.map((product, index) => (
              <ProductEntry
                key={product.id}
                index={product.id}
                productID={product.productID}
                onProductDataChange={handleProductChange}
                onRemove={removeProduct}
              />
            ))}
          </Box>
          <Button
            type="button"
            onClick={createProductEntry}
            sx={{
              backgroundColor: theme.palette.secondary[300],
              marginTop: "1rem",
            }}
          >
            Add Product
          </Button>
          {/* ... other buttons */}
        </Box>
        <Box>
          <Typography variant="h6">Audio File:</Typography>
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => setAudioFile(e.target.files[0])}
          />
        </Box>

        {/* ... other form elements */}
      </Box>

      <Box>
        <Button
          type="button"
          onClick={handleEntryTest}
          sx={{
            backgroundColor: theme.palette.secondary[300],
            marginTop: "1rem",
            mr: "1rem",
          }}
        >
          Entry Test
        </Button>
        <Button
          type="submit"
          onClick={handleSubmit}
          sx={{
            backgroundColor: theme.palette.secondary[300],
            marginTop: "1rem",
          }}
        >
          Submit
        </Button>
      </Box>

      {/* ... other form elements */}
    </Box>
  );
};

export default TransactionsInsertion;
