import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useEffect, useState } from "react";
import { getUserInfo } from "./lib/api/auth";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserInfo().then((res) => {
      if (res) {
        setUser({
          userId: res.id,
          nickname: res.nickname,
          avatar: res.avatar,
        });
      }
    });
  }, []);
  console.log("로그인된 유저 정보:", user);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={<Home expenses={expenses} setExpenses={setExpenses} />}
            />
            <Route
              path="/detail/:id"
              element={<Detail expenses={expenses} setExpenses={setExpenses} />}
            />
          </Route>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<SignUp expenses={SignUp} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
