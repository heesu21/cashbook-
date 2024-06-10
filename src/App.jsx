import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "59454ecd-0f61-422a-89d9-3213915343f2",
      month: 1,
      date: "2024-01-05",
      item: "식비",
      amount: 100000,
      description: "세광양대창",
    },
    {
      id: "4f60bace-03dc-458d-b0dc-d89ada034b29",
      month: 1,
      date: "2024-01-10",
      item: "도서",
      amount: 40500,
      description: "모던 자바스크립트",
    },
    {
      id: "34e14f86-1b9d-462d-af79-6dd9b5d1fcc5",
      month: 2,
      date: "2024-02-02",
      item: "식비",
      amount: 50000,
      description: "회식",
    },
    {
      id: "52f8e60d-5998-4f82-961d-4ab0cb3f26b1",
      month: 2,
      date: "2024-02-02",
      item: "간식",
      amount: 500,
      description: "아이스크림",
    },
    {
      id: "e678e3f4-5aa1-4ccd-a1c7-86e839c4ac9e",
      month: 2,
      date: "2024-02-02",
      item: "여행",
      amount: 1055000,
      description: "일본여행",
    },
    {
      id: "c9caf250-8c8a-4dde-9f0e-b86e72cbaad2",
      month: 2,
      date: "2024-02-02",
      item: "미용",
      amount: 155000,
      description: "미용실",
    },
    {
      id: "b0247fe5-7d54-45fe-9945-7f8687b0ded5",
      month: 2,
      date: "2024-02-02",
      item: "도서",
      amount: 95000,
      description:
        "자율주행차량 운전주행모드 자동 전환용 인식률 90% 이상의 다중 센서 기반 운전자 상태 인식 및 상황 인식 원천 기술 개발",
    },
  ]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home expenses={expenses} setExpenses={setExpenses} />}
          />
          <Route
            path="/detail/:id"
            element={<Detail expenses={expenses} setExpenses={setExpenses} />}
          />
          <Route
            path="/login"
            element={<Login expenses={expenses} setExpenses={setExpenses} />}
          />
          <Route
            path="/signup"
            element={<SignUp expenses={expenses} setExpenses={setExpenses} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
