import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import UserPortal from "./pages/UserPortal";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import Login from "./pages/Login";
import "./App.css";
import SignUp from "./pages/SignUp";
import PublicRoute from "./components/utils/PublicRoute";
import { Reset } from 'styled-reset'
import { AuthProvider } from "./components/utils/Auth";
function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <>
    <Reset />
      <Router>
        <AuthProvider>
          <Routes>
            {/* PUBLIC ROUTE FOR LOGIN */}
            {/* PUBLIC ROUTE SIGNUP */}
            {/* ROUTE FOR "/" WITH REDIRECT TO LOGIN ROUTE */}
            {/* ROUTE TO USER PROFILE ROUTE WITH WILDCARD MATCHER */}
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
