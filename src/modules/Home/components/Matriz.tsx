import ButtonBase from "@/common/components/atoms/buttons/ButtonBase";
import InputForm from "@/common/components/atoms/form/InputForm";
import { post } from "@/common/helpers/petitions";
import { useMatrizProviderContext } from "@/common/providers/MatrizProvider";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Matriz = () => {
  const [dataNumbers, setDataNumbers] = useState<number[][]>([]);

  const { columns, rows, setData } = useMatrizProviderContext();

  useEffect(() => {
    const newData = Array.from({ length: rows }, () => Array(columns).fill(0));
    setDataNumbers(newData);
  }, [rows, columns]);

  const handleChange = (
    rowIndex: number,
    columnIndex: number,
    value: number
  ) => {
    const newData = [...dataNumbers];
    newData[rowIndex][columnIndex] = value;
    setDataNumbers(newData);
  };

  const validateData = () => {
    for (const row of dataNumbers) {
      for (const cell of row) {
        if (!cell) {
          return false;
        }
      }
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!rows || !columns || !validateData()) {
      toast.error("Ingresa todos los valores de la matriz");
      return;
    }

    try {
      const testPetition = new Promise((resolve) => setTimeout(resolve, 3000));
      // post("calcular-factorización", dataNumbers) // dataNumbers is the data to send to the server

      toast
        .promise(testPetition, {
          pending: "Calculando ...",
          success: "Calculado correctamente 🎉",
          error: "Error al calcular la factorización",
        })
        .then((result) => {
          const data = {
            q: [
              [1, 2, 3],
              [4, 5, 6],
              [7, 8, 9],
              [10, 11, 12],
              [13, 14, 15],
              [16, 17, 18],
            ],
            r: [
              [1, 2, 3, 4, 5, 6, 7],
              [8, 9, 10, 11, 12, 13, 14],
              [15, 16, 17, 18, 19, 20, 21],
              [22, 23, 24, 25, 26, 27, 28],
            ],
            result_Q: {
              valor_maximo: 28,
              valor_minimo: 1,
              promedio: 14.5,
              suma_total: 14,
              matriz_diagonal: 14.5,
            },
            result_R: {
              valor_maximo: 28,
              valor_minimo: 1,
              promedio: 14.5,
              suma_total: 14,
              matriz_diagonal: 14.5,
            },
          };

          setData(data); // setData(result); // result is the response from the server
        })
        .finally(() => {
          setDataNumbers(
            Array.from({ length: rows }, () => Array(columns).fill(""))
          );
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-96 flex flex-col border p-1 rounded w-full">
      <div className="overflow-auto flex-grow">
        {(!rows || !columns) && (
          <p className="h-full flex justify-center items-center text-center text-base text-gray-500">
            Por favor, ingresa el número de filas y columnas.
          </p>
        )}
        <table className="mb-2 mr-2">
          <tbody>
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: columns }).map((_, columnIndex) => (
                  <td key={columnIndex} className="p-1">
                    <InputForm
                      id={`${rowIndex}-${columnIndex}`}
                      type="number"
                      inputClasses="!w-20 text-sm py-1.5 px-1"
                      placeholder="0"
                      onChange={(e) =>
                        handleChange(
                          rowIndex,
                          columnIndex,
                          Number(e.target.value)
                        )
                      }
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ButtonBase
        type="button"
        className={classNames(
          { grayscale: !rows || !columns },
          "col-span-full hover:bg-blue-600 dark:hover:bg-blue-400 w-full transition-colors"
        )}
        text="Calcular factorización QR"
        onClick={handleSubmit}
        disabled={!rows || !columns}
      />
    </div>
  );
};

export default Matriz;
