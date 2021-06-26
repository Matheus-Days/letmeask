import logoImg from "../../assets/images/logo.svg";
import "./styles.scss";
import { useHistory } from "react-router-dom";

export function PageNotFound() {
  const history = useHistory();

  return (
    <div id="error-page">
      <header>
        <img src={logoImg} alt="Letmeask" onClick={() => history.push("/")} />
      </header>
      <main>
        <h1>Erro 404: Página não encontrada.</h1>
      </main>
    </div>
  );
}
