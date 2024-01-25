import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import { ProtectedRoute } from "./protectedRoutes.jsx";

import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import LoginForm from "../components/forms/LoginForm.jsx";
import RegisterForm from "../components/forms/RegisterForm.jsx";
import Users from "../pages/Users.jsx";

export const AppRouter = () => {

  const isLoggedIn = true;

  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute isAllowed={isLoggedIn} redirectTo="/auth/login" />}>
          <Route path="/" element={<Home />}>
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Route>
        <Route element={<ProtectedRoute isAllowed={!isLoggedIn} redirectTo="/" />}>
          <Route path="/auth" element={<Login />}>
            <Route path="/auth/login" element={<LoginForm />} />
            <Route path="/auth/register" element={<RegisterForm />} />
          </Route>
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );

  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }

  function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }

  function NoMatch() {
    return (
      <div>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
  }
}

