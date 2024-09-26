import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Supplier } from "../types";

export type UseGetSupplierReturn = {
  data: Supplier[];
  loading: boolean;
  error: string | null;
};

const useGetSuppliers = () => {
  const [data, setData] = useState<Supplier[]>();
  const [error, setError] = useState<AxiosError>();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/suppliers");
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error as AxiosError);
      } finally {
        setLoaded(true);
      }
    };

    fetchData();
  }, []);

  return {
    data,
    loading: !loaded,
    error,
  };
};

export default useGetSuppliers;
