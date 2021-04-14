import "./style.css";

export default function Extrato({ values, name }) {
  return (
    <div className="extratoo">
      <span>
        <strong>{name}</strong>
      </span>
      {name === "Ultimos Ganhos" ? (
        <ul className="lista">
          <li>R$: 500</li>
          <li>R$: 5050</li>
          <li>R$: 5050</li>
          <li>R$: 5050</li>
          <li>R$: 5050</li>
        </ul>
      ) : (
        <ul className="lista">
          <li>R$: - 500</li>
          <li>R$: - 5050</li>
          <li>R$: - 5050</li>
          <li>R$: - 5050</li>
          <li>R$: - 5050</li>
        </ul>
      )}
    </div>
  );
}
