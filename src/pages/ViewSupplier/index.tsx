import { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../../components/Button";
import useDeleteSupplier from "../../hooks/useDeleteSupplier";
import useGetSingleSupplier from "../../hooks/useGetSingleSupplier";
import { Supplier } from "../../types";
import {
  ButtonsWrapper,
  FieldName,
  FieldsWrapper,
  FieldValue,
  ViewSupplierWrapper,
} from "./styles";

const ViewSupplier = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getSingleSupplier } = useGetSingleSupplier();
  const { deleteSupplier } = useDeleteSupplier();
  const [supplier, setSupplier] = useState<Supplier | null>(null);

  useEffect(() => {
    if (id) {
      getSingleSupplier(id).then((data) => {
        setSupplier(data);
      });
    }
  }, []);

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
          Swal.fire("Deletado!", "O fornecedor foi deletado.", "success");
          navigate("/");
        });
      }
    });
  };

  const fields: { label: string; key: keyof Supplier }[] = [
    { label: "Nome", key: "name" },
    { label: "Descrição", key: "description" },
    { label: "Endereço", key: "address" },
    { label: "Número", key: "addressNumber" },
    { label: "Cidade", key: "addressCity" },
    { label: "Estado", key: "addressState" },
    { label: "CEP", key: "addressCep" },
    { label: "Referência", key: "addressReference" },
    { label: "Contatos", key: "contacts" },
  ];

  return (
    <ViewSupplierWrapper>
      <h1>Detalhes do fornecedor</h1>
      <FieldsWrapper>
        {supplier &&
          fields.map((field) => (
            <div>
              <FieldName>{field.label}: </FieldName>
              <FieldValue>
                {field.key === "contacts"
                  ? supplier.contacts.map((contact, index) => (
                      <div key={index}>
                        <p>
                          {contact.name} -{" "}
                          <Button
                            text={contact.number}
                            href={`https://wa.me/${contact.number.replace(
                              /[^\d]/g,
                              ""
                            )}`}
                            variant="link"
                          />
                        </p>
                      </div>
                    ))
                  : supplier[field.key]}
              </FieldValue>
            </div>
          ))}
      </FieldsWrapper>
      <ButtonsWrapper>
        <Button
          icon={<MdEdit />}
          variant="primary"
          text="Editar"
          onClick={() => {
            navigate(`/supplier/${supplier!.id}`);
          }}
        />
        <Button
          icon={<MdDelete />}
          variant="delete"
          text="Deletar"
          onClick={() => {
            if (supplier) {
              handleDelete(supplier.id!);
            }
          }}
        />
      </ButtonsWrapper>
    </ViewSupplierWrapper>
  );
};

export default ViewSupplier;
