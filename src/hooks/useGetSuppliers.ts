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
        const response = await fetch(
          `${import.meta.env.VITE_REACT_JSON_SERVER_URL}/suppliers`
        );
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
