import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";
import { useEffect, useState } from "react";
import { getUserInfo } from "./lib/api/auth";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const [user, setUser] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout user={user} setUser={setUser} />}>
            <Route
              index
              element={<Home expenses={expenses} setExpenses={setExpenses} />}
            />
            <Route
              path="/detail/:id"
              element={<Detail expenses={expenses} setExpenses={setExpenses} />}
            />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<SignUp expenses={SignUp} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
