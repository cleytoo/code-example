import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FiLock, FiMail } from "react-icons/fi";
import toast from "react-hot-toast";

import * as S from "./styles";
import { Button } from "components/Button";
import { TextInput } from "components/TextInput";
import { useSession } from "contexts";
import { useApi } from "./services";

type Credentials = {
  email: string;
  password: string;
};

export function Login() {
  const { setNewSession } = useSession();
  const { api } = useApi();

  const [isFetching, setIsFetching] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Credentials>({
    shouldFocusError: false,
  });

  const handleLogin = async (credentials: Credentials) => {
    try {
      const { data } = await api().post("Authetication", credentials);
      setNewSession(data);
    } catch (error) {
      toast.error(
        "Falha ao realizar login. Caso o erro persista entre em contato com o departamento de atendimento!"
      );
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <S.Wrapper
      onSubmit={handleSubmit(handleLogin)}
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 15 }}
    >
      <TextInput
        {...register("email", { required: "Campo obrigatório" })}
        label="E-mail"
        startIcon={<FiMail size={18} />}
        hasError={errors.email?.message}
      />
      <TextInput
        {...register("password", { required: "Campo obrigatório" })}
        label="Senha"
        type="password"
        startIcon={<FiLock size={18} />}
        hasError={errors.password?.message}
      />
      <Button type="submit" isLoading={isFetching}>
        Entrar
      </Button>
      <Link to="/forgot-password">Esqueci minha senha</Link>
    </S.Wrapper>
  );
}
