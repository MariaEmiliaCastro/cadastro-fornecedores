import * as yup from "yup";
import { Supplier } from "../types";

export const supplierSchema: yup.ObjectSchema<Omit<Supplier, "id">> = yup
  .object()
  .shape({
    name: yup.string().required("Nome é obrigatório"),
    description: yup.string().required("Descrição é obrigatória"),
    contacts: yup
      .array()
      .of(
        yup.object().shape({
          name: yup.string().required("Nome do contato é obrigatório"),
          number: yup
            .string()
            .matches(
              /^\(\d{2}\) \d{5}-\d{4}$/,
              "Número de telefone deve estar no formato (##) #####-####"
            )
            .min(1, "Pelo menos um contato é obrigatório")
            .required("Número de telefone é obrigatório"),
        })
      )
      .required("Contatos são obrigatórios"),
    addressCep: yup
      .string()
      .matches(/^\d{5}-\d{3}$/, "CEP deve estar no formato #####-###")
      .required("CEP é obrigatório"),
    addressState: yup
      .string()
      .matches(/^[A-Z]{2}$/, "Estado deve ter 2 caracteres maiúsculos")
      .required("Estado é obrigatório"),
    addressCity: yup.string().required("Cidade é obrigatória"),
    address: yup.string().required("Logradouro é obrigatório"),
    addressNumber: yup.number().required("Número é obrigatório"),
    addressReference: yup.string().required("Referência é obrigatória"),
  });
