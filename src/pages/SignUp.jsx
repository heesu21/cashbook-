import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { register } from "../lib/api/auth";

// Styled components
const Body = styled.div`
  background-color: #20c9c9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
`;

const LoginContainer = styled.form`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &.signup {
    background-color: #a9a9a9;
    color: white;
  }

  &.signup:hover {
    background-color: #8c8c8c;
  }

  &.login {
    background-color: #555;
    color: white;
  }

  &.login:hover {
    background-color: #444;
  }
`;

// Main component
const SignUp = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(1);
    const response = await register({
      id: id,
      password: password,
      nickname: nickname,
    });
    if (response) {
      confirm("회원가입이 완료되었습니다.");
      navigate("/login");
    }
  };


  const navigate = useNavigate();

  return (
    <Body>
      <LoginContainer onSubmit={handleRegister}>
        <Title>회원가입</Title>
        <div>
          <Title htmlFor="id">아이디</Title>
          <Input
            type="text"
            id="id"
            placeholder="아이디"
            onChange={(e) => setId(e.target.value)}
            minLength="4"
            maxLength="10"
          />
        </div>
        <div>
          <Title htmlFor="password">비밀번호</Title>
          <Input
            type="password"
            id="password"
            placeholder="비밀번호"
            onChange={(e) => setPassword(e.target.value)}
            minLength="4"
            maxLength="15"
          />
        </div>
        <div>
          <Title htmlFor="nickname">닉네임</Title>
          <Input
            type="text"
            id="nickname"
            placeholder="닉네임"
            onChange={(e) => setNickname(e.target.value)}
            minLength="1"
            maxLength="10"
          />
        </div>
        <Button type="submit" className="signUp">
          회원가입
        </Button>
        <Button
          onClick={() => {
            navigate("/login");
          }}
          className="login"
        >
          로그인
        </Button>
      </LoginContainer>
    </Body>
  );
};

export default SignUp;
