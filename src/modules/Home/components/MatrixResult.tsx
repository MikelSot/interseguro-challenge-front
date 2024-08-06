import React from "react";
import {Statistic} from "@/common/interfaces/statistic";

const MatrixResult = ({ type, statistic }: MatrixResultProps) => {
  if (!statistic) return null

  const {max_value, min_value, average, total_sum, is_diagonal} = statistic

  return (
    <div className="border p-4 rounded-lg">
      <p className="font-bold mb-2">Resultado {type}:</p>
      <div className="grid md:grid-cols-2">
        <p><strong>Valor máximo:</strong> {max_value}</p>
        <p><strong>Valor mínimo:</strong> {min_value}</p>
        <p><strong>Promedio:</strong> {average}</p>
        <p><strong>Suma total:</strong> {total_sum}</p>
        <p><strong>Matriz diagonal:</strong> {is_diagonal ? "Si" : "No"}</p>
      </div>
    </div>
  )
}

type MatrixResultProps = {
  type: string;
  statistic: Statistic
}

export default MatrixResult;
