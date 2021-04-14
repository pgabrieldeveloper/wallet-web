import Extrato from "../../components/Extrato";
import Logo from "../../components/Logo";
import Saldo from "../../components/Saldo";
import SideBar from "../../components/SideBar";
import "./style.css";
export default function Home() {
  return (
    <div className="container">
      <div className="grid-item grid-logo">
        <Logo />
      </div>
      <div className="grid-item grid-sidebar">
        <SideBar />
      </div>
      <div className="grid-item grid-content">
        <div className="saldo">
          <Saldo saldo={"5.400.00"} />
        </div>
        <div className="extrato">
          <Extrato name={"Ultimos Ganhos"} />
          <Extrato name={"Ultimos Gastos"} />
        </div>
      </div>
    </div>
  );
}
