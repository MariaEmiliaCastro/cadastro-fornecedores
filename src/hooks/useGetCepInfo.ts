import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const useGetCepInfo = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const getCepInfo = async (cep: string) => {
    if (!cep) {
      toast.error("CEP não encontrado");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        throw new Error("CEP não encontrado");
      }
      return response.data;
    } catch (err) {
      toast.error("Erro ao buscar CEP. Tente novamente");
    } finally {
      setLoading(false);
    }
  };

  return { loading, getCepInfo };
};

export default useGetCepInfo;
