import { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  Navigate,
  Router,
} from "react-router-dom";
import InsertionPage from "scenes/Insertion";
import SearchPage from "scenes/Search";
import DeletePage from "scenes/Delete";
import { ThemeProvider, createTheme } from "@mui/material";
import { useSelector } from "react-redux";
import customTheme from "theme";
import OverallStatPage from "scenes/OverallStats";
import TransactionPage from "scenes/Transactions";
import Layout from "scenes/Layout";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const mode = useSelector((state) => state.global.mode);
  const theme = customTheme(mode);
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Navigate to="/overallStats" replace />} />
            <Route element={<Layout />}>
              <Route path="/overallStats" element={<OverallStatPage />} />
              <Route path="/transactions" element={<TransactionPage />} />
              {/* Add your other routes here */}
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
