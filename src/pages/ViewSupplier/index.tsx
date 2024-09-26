import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetSingleSupplier from "../../hooks/useGetSingleSupplier";
import { Supplier } from "../../types";
import { ViewSupplierWrapper } from "./styles";

const ViewSupplier = () => {
  const { id } = useParams();
  const { getSingleSupplier } = useGetSingleSupplier();
  const [supplier, setSupplier] = useState<Supplier | null>(null);

  useEffect(() => {
    if (id) {
      getSingleSupplier(id).then((data) => {
        setSupplier(data);
        console.log(data);
      });
    }
  }, []);

  return (
    <ViewSupplierWrapper>
      <h1>Detalhes do fornecedor</h1>
      <p>Nome: {supplier?.name}</p>
    </ViewSupplierWrapper>
  );
};

export default ViewSupplier;
