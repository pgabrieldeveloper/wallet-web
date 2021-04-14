import logo from "../../assets/carteira.png";
import "./style.css";
export default function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo carteira" />
      <h2>Wallet Web Monitore Seu Ganhos e Gastos</h2>
    </div>
  );
}
