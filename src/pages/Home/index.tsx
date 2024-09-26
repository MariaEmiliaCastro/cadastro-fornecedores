import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Table from "../../components/Table";
import useDeleteSupplier from "../../hooks/useDeleteSupplier";
import useGetSuppliers from "../../hooks/useGetSuppliers";
import { Supplier } from "../../types";
import { HomeWrapper, SearchInput } from "./styles";

const Home = () => {
  const { data, loading } = useGetSuppliers();
  const { deleteSupplier } = useDeleteSupplier();
  const [suppliers, setSuppliers] = useState<Supplier[]>();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (data) {
      setSuppliers(data);
    }
  }, [data]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  const handleDelete = (id: number) => {
    Swal.fire({
      title: "Tem certeza que deseja deletar o fornecedor?",
      text: "Esta ação é irreversível",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0082F5",
      cancelButtonColor: "#B70909",
      confirmButtonText: "Deletar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSupplier(id).then(() => {
          setSuppliers((prevSuppliers) =>
            prevSuppliers?.filter((supplier) => supplier.id !== id)
          );
          Swal.fire("Deletado!", "O fornecedor foi deletado.", "success");
        });
      }
    });
  };

  const filteredSuppliers = suppliers?.filter((supplier) =>
    supplier.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <HomeWrapper>
      <h1>Fornecedores</h1>
      <div>
        <SearchInput
          type="text"
          placeholder="Buscar fornecedor por nome"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Table
          suppliers={filteredSuppliers || []}
          searchQuery={searchQuery}
          handleDelete={handleDelete}
        />
      </div>
    </HomeWrapper>
  );
};

export default Home;
