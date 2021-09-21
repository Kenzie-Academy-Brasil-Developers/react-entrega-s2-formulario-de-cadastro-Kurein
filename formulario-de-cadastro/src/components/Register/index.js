import "./styles.css";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Register() {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome Obrigatório")
      .matches(
        /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
        "Nome deve apenas conter letras"
      ),
    email: yup.string().required("Email Obrigatório").email("Email Inválido"),
    password: yup
      .string()
      .required("Senha Obrigatória")
      .min(8, "Senha deve conter no mínimo 8 dígitos")
      .matches(
        /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*))/,
        "Senha deve conter uma letra maiúscula, uma letra minúscula, um número e um símbolo."
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas Diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmitFunction(data) {
    history.push(`/login/${data.name}`);
  }

  return (
    <form className="mainForm" onSubmit={handleSubmit(onSubmitFunction)}>
      <TextField
        label="Nome"
        variant="standard"
        error={!!errors.name}
        helperText={errors.name?.message}
        {...register("name")}
      />
      <TextField
        label="Email"
        variant="standard"
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register("email")}
      />
      <TextField
        label="Senha"
        variant="standard"
        error={!!errors.password}
        helperText={errors.password?.message}
        {...register("password")}
      />
      <TextField
        label="Confirmar Senha"
        variant="standard"
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
        {...register("confirmPassword")}
      />
      <Button type="submit" variant="contained" sx={{ marginTop: "15px" }}>
        Cadastre-se
      </Button>
    </form>
  );
}

export default Register;
