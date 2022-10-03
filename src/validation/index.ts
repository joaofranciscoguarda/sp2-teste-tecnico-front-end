import * as yup from "yup";

export const CalculatorSchema = yup.object().shape({
  amount: yup.number().required("Amount is required").typeError("Amount deve ser um número"),
  installments: yup.number().required("Installments is required").max(12, 'Não deve exceder 12 parcelas').typeError("Installment deve ser um número"),
  mdr: yup.number().required("MDR is required").typeError("MDR deve ser um número"),
  days: yup.number().notRequired(),
});
