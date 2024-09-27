import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

interface UseDeleteSupplierResult {
  deleteSupplier: (id: number) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

const useDeleteSupplier = (): UseDeleteSupplierResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteSupplier = async (id: number) => {
    setIsLoading(true);
    setError(null);
    try {
      await axios.delete(
        `${import.meta.env.VITE_REACT_JSON_SERVER_URL}/suppliers/${id}`
      );
      toast.success("Fornecedor deletado com sucesso!");
    } catch (err) {
      toast.error("Erro ao deletar fornecedor!");
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteSupplier, isLoading, error };
};

export default useDeleteSupplier;
