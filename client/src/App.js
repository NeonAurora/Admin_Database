import { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  Navigate,
  Router,
  Outlet,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material";
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
            <Route
              path="/"
              element={
                <Layout>
                  <Navigate to="/overallStats" replace />
                </Layout>
              }
            />
            <Route
              path="/overallStats"
              element={
                <Layout>
                  <OverallStatPage />
                </Layout>
              }
            />
            <Route
              path="/transactions"
              element={
                <Layout>
                  <TransactionPage />
                </Layout>
              }
            />
            {/* Add your other routes here */}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
