import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Supplier } from "../types";

const useUpdateSupplier = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const updateSupplier = async (
    supplierId: number,
    updatedData: Partial<Supplier>
  ) => {
    setLoading(true);
    setError(null);

    try {
      await axios.put(
        `${import.meta.env.VITE_REACT_JSON_SERVER_URL}/suppliers/${supplierId}`,
        updatedData
      );
      setLoading(false);
      toast.success("Fornecedor atualizado com sucesso!");
      navigate("/");
    } catch (err) {
      setLoading(false);
      toast.error("Erro ao atualizar fornecedor!", err.message);
    }
  };

  return { updateSupplier, loading, error };
};

export default useUpdateSupplier;
