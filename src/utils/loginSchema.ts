import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email deve ser válido")
    .required("Email é obrigatório"),
  password: yup
    .string()
    .min(6, "Senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
});

export default loginSchema;
