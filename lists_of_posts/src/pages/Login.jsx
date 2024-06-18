import React, { useContext } from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate();
  
    const handleLogin = event => {
      event.preventDefault();
      setIsAuth(true);
      localStorage.setItem("auth", "true");
      navigate("/posts"); // Перенаправление на страницу posts после успешного входа
    };
  
    return (
      <div>
        <h1>Страница для логина</h1>
        <form onSubmit={handleLogin}>  {/* Исправлено с from на form */}
          <MyInput type="text" placeholder="Введите логин" />
          <MyInput type="password" placeholder="Введите пароль" />
          <MyButton>Войти</MyButton>
        </form>
      </div>
    );
  };
  
  export default Login;