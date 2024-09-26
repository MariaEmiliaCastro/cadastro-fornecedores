import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Supplier } from "../types";

interface UseCreateSupplierResult {
  createSupplier: (supplier: Omit<Supplier, "id">) => Promise<void>;
  loading: boolean;
  error: string | null;
}

const useCreateSupplier = (): UseCreateSupplierResult => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const createSupplier = async (
    supplier: Omit<Supplier, "id">
  ): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const randomId = Math.floor(Math.random() * 1000);
      await axios.post("http://localhost:3000/suppliers", {
        ...supplier,
        id: randomId.toString(),
      });
      toast.success("Fornecedor cadastrado com sucesso!");
      navigate("/");
    } catch (err) {
      toast.error("Erro ao cadastrar fornecedor: ", err.message);
    } finally {
      setLoading(false);
    }
  };

  return { createSupplier, loading, error };
};

export default useCreateSupplier;
