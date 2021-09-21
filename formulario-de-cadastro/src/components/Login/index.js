import { useParams, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

function Login() {
  const history = useHistory();
  const params = useParams();

  return (
    <div>
      <h1>Bem vindo(a) {params.name}!</h1>
      <Button onClick={() => history.push("/")} variant="contained">
        Voltar
      </Button>
    </div>
  );
}

export default Login;
