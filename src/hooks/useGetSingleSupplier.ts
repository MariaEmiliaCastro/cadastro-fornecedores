import axios from "axios";
import { useState } from "react";

const useGetSingleSupplier = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getSingleSupplier = (id: string) => {
    const fetchSupplier = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/suppliers/${id}`
        );

        return response.data;
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    return fetchSupplier();
  };

  return { getSingleSupplier, loading, error };
};

export default useGetSingleSupplier;
