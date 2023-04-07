import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import InsertionPage from "scenes/Insertion";
import SearchPage from 'scenes/Search';
import DeletePage from "scenes/Delete";
import {ThemeProvider, createTheme} from "@mui/material";
// import { themeSettings } from "theme";
import { useSelector } from "react-redux";
import customTheme from "theme";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const mode = useSelector((state) => state.global.mode);
  const theme = customTheme(mode);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/insertion">Insertion Page</Link>
              </li>
              <li>
                <Link to="/search">Search Page</Link>
              </li>
              <li>
                <Link to="/delete">Delete</Link>
              </li>
              {/* Add other navigation links here */}
              
            </ul>
          </nav>

          <Routes>
            <Route path="/insertion" element={<InsertionPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/delete" element={<DeletePage />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
