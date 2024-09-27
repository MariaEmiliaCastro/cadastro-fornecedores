import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Supplier } from "../types";

const useUpdateSupplier = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const updateSupplier = async (
    supplierId: number,
    updatedData: Partial<Supplier>
  ) => {
    setLoading(true);

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
      if (err instanceof Error) {
        toast.error(`Erro ao cadastrar fornecedor: ${err.message}`);
        return;
      }
      toast.error("Erro ao cadastrar fornecedor");
    }
  };

  return { updateSupplier, loading };
};

export default useUpdateSupplier;
