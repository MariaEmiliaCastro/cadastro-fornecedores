import { MdDelete, MdEdit, MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Supplier } from "../../types";
import Button from "../Button";
import {
  ButtonsWrapper,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TableWrapper,
} from "./styles";

export type TableProps = {
  suppliers: Supplier[];
  searchQuery: string;
  handleDelete: (id: number) => void;
};

const Table = ({ suppliers, searchQuery, handleDelete }: TableProps) => {
  const navigate = useNavigate();
  const filteredSuppliers = suppliers?.filter((supplier) =>
    supplier.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <TableWrapper>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Nome</TableHeaderCell>
          <TableHeaderCell>Descricao</TableHeaderCell>
          <TableHeaderCell>Endereco</TableHeaderCell>
          <TableHeaderCell>Ações</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <tbody>
        {filteredSuppliers &&
          filteredSuppliers.map((supplier: Supplier) => (
            <TableRow key={supplier.id}>
              <TableCell>{supplier.name}</TableCell>
              <TableCell>{supplier.description}</TableCell>
              <TableCell>
                {supplier.address} - {supplier.addressNumber} -{" "}
                {supplier.addressCity} - {supplier.addressState} -{" "}
                {supplier.addressCep} - {supplier.addressReference}
              </TableCell>
              <ButtonsWrapper>
                <Button
                  icon={<MdOutlineRemoveRedEye />}
                  variant="primary"
                  ariaLabel="Visualizar mais informações"
                  rounded
                  onClick={() => {
                    navigate(`/supplier/${supplier.id}/view`);
                  }}
                />
                <Button
                  icon={<MdEdit />}
                  variant="primary"
                  ariaLabel="Editar fornecedor"
                  rounded
                  onClick={() => {
                    navigate(`/supplier/${supplier.id}`);
                  }}
                />
                <Button
                  icon={<MdDelete />}
                  variant="delete"
                  ariaLabel="Deletar fornecedor"
                  rounded
                  onClick={() => {
                    handleDelete(supplier.id!);
                  }}
                />
              </ButtonsWrapper>
            </TableRow>
          ))}
      </tbody>
    </TableWrapper>
  );
};

export default Table;
