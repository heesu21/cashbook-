import styled from "styled-components";

const Body = styled.div`
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
`;

const LoginContainer = styled.div`
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

  &.login {
    background-color: #a9a9a9;
    color: white;
  }

  &.login:hover {
    background-color: #8c8c8c;
  }

  &.signup {
    background-color: #555;
    color: white;
  }

  &.signup:hover {
    background-color: #444;
  }
`;

// Main component
const Login = () => {
  return (
    <Body>
      <LoginContainer>
        <Title>
          로그인
          <br />
          아이디
        </Title>
        <Input type="text" placeholder="아이디" />
        <Title>비밀번호</Title>
        <Input type="password" placeholder="비밀번호" />
        <Button className="login">로그인</Button>
        <Button className="signup">회원가입</Button>
      </LoginContainer>
    </Body>
  );
};

export default Login;
