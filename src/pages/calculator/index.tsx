import React, { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CalculatorSchema } from "../../validation";
import Input from "../../components/input/input";
import { CalculatorContainer, Container, Form, FormHeader } from "./styles";
import api from "../../service/api";
import Values from "../../components/valuesApresentation/values";
import { useLocal } from "../../context/context";

interface FormValues {
  amount: number;
  installments: number;
  mdr: number;
}

function Calculator() {
  const { data, setData } = useLocal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(CalculatorSchema) });

  const handleCalc: SubmitHandler<FormValues> = async (
    requestData: FormValues
  ) => {

    const response = await api.post("", {
      ...requestData,
    });

    setData(response.data);
    localStorage.setItem("@calc:values", JSON.stringify(response.data));
  };

  return (
    <Container>
      <CalculatorContainer>
        <Form onSubmit={handleSubmit(handleCalc)}>
          <FormHeader>Simule sua antecipão</FormHeader>
          <Input
            type="number"
            label={"Informe o valor da venda *"}
            register={register}
            name={"amount"}
            placeholder="Insira valor aqui"
            error={errors.amount}
          />
          <Input
            type="number"
            label={"Em quantas parcelas? (max=12) *"}
            register={register}
            name={"installments"}
            placeholder="Insira parcelas aqui"
            error={errors.installments}
          />
          <Input
            type="number"
            label={"Informe o percentual de MDR *"}
            register={register}
            name={"mdr"}
            placeholder="Insira percentual aqui"
            error={errors.mdr}
          />
          <button type="submit">Calcular</button>
        </Form>
        <Values></Values>
      </CalculatorContainer>
    </Container>
  );
}

export default Calculator;
