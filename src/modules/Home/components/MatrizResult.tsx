import { Result } from "@/common/interfaces/matrix";
import React from "react";

const MatrizResult = ({ type, result }: MatrizResultProps) => {
  if (!result) return null;

  return (
    <div className="border p-4 rounded-lg">
      <p className="font-bold mb-1">Resultado {type}:</p>
      <div className="grid md:grid-cols-2">
        <p>Valor máximo: {result.valor_maximo}</p>
        <p>Valor mínimo: {result.valor_minimo}</p>
        <p>Promedio: {result.promedio}</p>
        <p>Suma total: {result.suma_total}</p>
        <p>Matriz diagonal: {result.matriz_diagonal}</p>
      </div>
    </div>
  );
};

type MatrizResultProps = {
  type: string;
  result: Result;
};

export default MatrizResult;
