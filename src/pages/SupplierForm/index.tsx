import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { MdDelete } from "react-icons/md";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import Field from "../../components/Field";
import { brazilianStates, FieldTypes } from "../../constants";
import useCreateSupplier from "../../hooks/useCreateSupplier";
import useGetCepInfo from "../../hooks/useGetCepInfo";
import useGetSingleSupplier from "../../hooks/useGetSingleSupplier";
import useUpdateSupplier from "../../hooks/useUpdateSupplier";
import { Supplier } from "../../types";
import { supplierSchema } from "../../utils/supplierSchema";
import { AddSupplierWrapper, Form } from "./styles";

const SupplierForm = () => {
  const { id } = useParams();
  const { getSingleSupplier } = useGetSingleSupplier();
  const { getCepInfo } = useGetCepInfo();
  const { createSupplier } = useCreateSupplier();
  const { updateSupplier } = useUpdateSupplier();
  const [supplier, setSupplier] = useState<Supplier | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    control,
  } = useForm<Supplier>({
    defaultValues: supplier
      ? { name: supplier.name }
      : { contacts: [{ name: "", number: "" }] },
    resolver: yupResolver(supplierSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "contacts",
    rules: { required: true },
  });

  useEffect(() => {
    if (id) {
      getSingleSupplier(id).then((data) => {
        const { id, ...rest } = data;
        setSupplier(rest);
        reset(rest);
      });
    }
  }, [reset]);

  const handleCepInfo = async (cep: string) => {
    const formattedCep = cep.replace("-", "");
    if (formattedCep.length !== 8) return;

    const data = await getCepInfo(formattedCep.replace("-", ""));

    if (!data) {
      return;
    }

    const { uf, localidade, logradouro } = data;

    setValue("addressState", uf);
    setValue("addressCity", localidade);
    setValue("address", logradouro);
  };

  return (
    <AddSupplierWrapper>
      <h1>Adicionar um fornecedor</h1>
      <Form
        onSubmit={handleSubmit((data) => {
          if (id) {
            return updateSupplier(Number(id), data);
          }
          createSupplier(data);
        })}
      >
        <Field
          label="Nome"
          fieldId="name"
          name="name"
          type={FieldTypes.TEXT}
          error={errors.name?.message}
          register={register}
        />
        <Field
          label="Descrição"
          fieldId="description"
          name="description"
          type={FieldTypes.TEXT}
          error={errors.description?.message}
          register={register}
        />
        <h2>Contatos</h2>
        {fields.map((_, index) => (
          <div key={index}>
            <Field
              label="Nome"
              fieldId={`contacts[${index}].name`}
              name={`contacts.${index}.name`}
              type={FieldTypes.TEXT}
              error={errors.contacts?.[index]?.name?.message}
              register={register}
            />
            <Field
              label="Telefone"
              fieldId={`contacts[${index}].number`}
              name={`contacts.${index}.number`}
              type={FieldTypes.TEXT}
              error={errors.contacts?.[index]?.number?.message}
              register={register}
            />
            <Button
              type="button"
              icon={<MdDelete />}
              disabled={fields.length === 1}
              onClick={() => remove(index)}
              variant="delete"
              text="Remover Contato"
            />
          </div>
        ))}
        <Button
          type="button"
          onClick={() => append({ name: "", number: "" })}
          variant="primary"
          text="Adicionar Contato"
        />
        <Field
          label="CEP"
          fieldId="addressCep"
          name="addressCep"
          type={FieldTypes.TEXT}
          error={errors.addressCep?.message}
          register={register}
          onChange={(e) => handleCepInfo(e.target.value)}
        />
        <Field
          label="Estado"
          fieldId="addressState"
          name="addressState"
          options={brazilianStates}
          type={FieldTypes.SELECT}
          error={errors.addressState?.message}
          register={register}
        />
        <Field
          label="Cidade"
          fieldId="addressCity"
          name="addressCity"
          type={FieldTypes.TEXT}
          error={errors.addressCity?.message}
          register={register}
        />
        <Field
          label="Logradouro"
          fieldId="address"
          name="address"
          type={FieldTypes.TEXT}
          error={errors.address?.message}
          register={register}
        />
        <Field
          label="Número"
          fieldId="addressNumber"
          name="addressNumber"
          type={FieldTypes.NUMBER}
          error={errors.addressNumber?.message}
          register={register}
        />
        <Field
          label="Referência"
          fieldId="addressReference"
          name="addressReference"
          type={FieldTypes.TEXT}
          error={errors.addressReference?.message}
          register={register}
        />

        <Button
          text={id ? "Atualizar Fornecedor" : "Cadastrar Fornecedor"}
          type="submit"
          variant="primary"
        />
      </Form>
    </AddSupplierWrapper>
  );
};

export default SupplierForm;
