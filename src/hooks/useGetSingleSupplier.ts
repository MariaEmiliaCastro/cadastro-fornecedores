import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const useGetSingleSupplier = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const getSingleSupplier = (id: string) => {
    const fetchSupplier = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_JSON_SERVER_URL}/suppliers/${id}`
        );

        return response.data;
      } catch (err) {
        if (err instanceof Error) {
          toast.error(`Erro ao cadastrar fornecedor: ${err.message}`);
          return;
        }
        toast.error("Erro ao cadastrar fornecedor");
      } finally {
        setLoading(false);
      }
    };

    return fetchSupplier();
  };

  return { getSingleSupplier, loading };
};

export default useGetSingleSupplier;
