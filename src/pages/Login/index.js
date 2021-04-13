import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import "./login.css";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container-center">
      <Logo className="logo" />
      <div className="login-area">
        <form>
          <h1>Entrar</h1>
          <input
            type="text"
            placeholder="email@domonio.com"
            value={email}
            onChange={(value) => setEmail(value.target.value)}
          />
          <input
            type="password"
            placeholder="******"
            value={password}
            onChange={(value) => setPassword(value.target.value)}
          />
          <button>Entrar</button>
        </form>
        <Link to="/register">Criar uma conta</Link>
      </div>
    </div>
  );
}
