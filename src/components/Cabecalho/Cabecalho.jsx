import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Cabecalho.scss";

export default function Cabecalho() {

  const rotaAtual = useLocation();
  const navigate = useNavigate();

  const objUser = JSON.parse(sessionStorage.getItem("data-user"));

  const handleLogout = ()=>{
    sessionStorage.removeItem("token-user");
    sessionStorage.removeItem("data-user");
    navigate("/login");
  }


  
  return (
    <>
      <header className="cabecalho">
        <div>
          <p>{objUser.email}</p>
          <p>{objUser.name}</p>
        </div>
        <div>
          <button onClick={handleLogout} className={sessionStorage.getItem("token-user") ? "btnLogout":"btn"}>LogOut</button>
        </div>
        <nav>
          <ul>
            <li><Link to="/" className={rotaAtual.pathname == "/" ? "active" : ""}>Home</Link> </li>
            <li><Link to="/login" className={rotaAtual.pathname == "/login" ? "active" : ""}>Login</Link> </li>
            <li><Link to="/produtos" className={rotaAtual.pathname == "/produtos" ? "active" : ""}>Produtos</Link> </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
