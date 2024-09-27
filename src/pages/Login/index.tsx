import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import Button from "../../components/Button";
import { AuthContext } from "../../contexts/authContext";
import { auth } from "../../firebase/firebase";
import { Login as LoginType } from "../../types";
import loginSchema from "../../utils/loginSchema";
import { Container, Form } from "./styles";

const Login = () => {
  const { userLoggedIn } = useContext(AuthContext);
  const [isLogging, setIsLogging] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = async ({ email, password }: LoginType) => {
    if (!isLogging) {
      setIsLogging(true);
      await signInWithEmailAndPassword(auth, email, password);
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to="/" replace />}
      <Container onSubmit={handleSubmit((data) => handleLogin(data))}>
        <div>
          <h1>Login</h1>
          <Form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email")} />
            {errors.email && <p>{errors.email.message}</p>}
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" {...register("password")} />
            {errors.password && <p>{errors.password.message}</p>}
            <Button text="Login" type="submit" variant="primary" />
          </Form>
          <Button
            text="Ainda nao tem uma conta? Cadastre-se"
            href="/register"
            variant="link"
            openInNewTab={false}
          />
        </div>
      </Container>
    </>
  );
};

export default Login;
