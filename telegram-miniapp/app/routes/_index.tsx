import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="container">
      <h1>Ameciclobot Miniapp</h1>
      <div>
        <Link to="/solicitar-pagamento">
          <button>💰 Solicitar Pagamento</button>
        </Link>
        <Link to="/criar-evento">
          <button>📅 Criar Evento</button>
        </Link>
      </div>
    </div>
  );
}
