import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import Button from "../../components/Button";
import { AuthContext } from "../../contexts/authContext";
import { auth } from "../../firebase/firebase";
import { Register as RegisterType } from "../../types";
import registerSchema from "../../utils/registerSchema";
import { Container, Form } from "./styles";

const Register = () => {
  const { userLoggedIn } = useContext(AuthContext);
  const [isLogging, setIsLogging] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: yupResolver(registerSchema),
  });

  const handleRegister = async ({
    email,
    password,
    name,
  }: Partial<RegisterType>) => {
    if (!isLogging) {
      setIsLogging(true);
      console.log("Chegou aqui 1");
      await createUserWithEmailAndPassword(auth, email!, password!).then(
        (userCredential) => {
          console.log("Chegou aqui 2");
          const user = userCredential.user;
          if (user) {
            if (auth.currentUser) {
              updateProfile(auth.currentUser, {
                displayName: name,
              });
            }
          }
        }
      );
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to="/" replace />}
      <Container onSubmit={handleSubmit((data) => handleRegister(data))}>
        <div>
          <h1>Cadastro</h1>
          <Form>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" {...register("name")} />
            {errors.name && <p>{errors.name.message}</p>}
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email")} />
            {errors.email && <p>{errors.email.message}</p>}
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" {...register("password")} />
            {errors.password && <p>{errors.password.message}</p>}
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            <Button text="Login" type="submit" variant="primary" />
          </Form>
          <Button
            text="Ja tem uma conta? Faca login"
            href="/login"
            variant="link"
            openInNewTab={false}
          />
        </div>
      </Container>
    </>
  );
};

export default Register;
