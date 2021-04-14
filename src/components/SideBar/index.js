import { Link } from "react-router-dom";
import "./style.css";
export default function SideBar() {
  return (
    <nav className="side-bar">
      <ul className="navegation">
        <li>
          <Link>Inicio</Link>
        </li>
        <li>
          <Link>Adicionar</Link>
        </li>
        <li>
          <Link>Remover</Link>
        </li>
        <li>
          <Link>Extrato de ganhos </Link>
        </li>
        <li>
          <Link>Extrato de Percas </Link>
        </li>
      </ul>
    </nav>
  );
}
