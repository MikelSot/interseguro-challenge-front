import ButtonBase from "@/common/components/atoms/buttons/ButtonBase"
import InputForm from "@/common/components/atoms/form/InputForm"
import { useMatrixContext } from "@/common/providers/Matrix"
import classNames from "classnames"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import {validateEmptyMatrix} from "@/common/helpers/matrix"
import {useMutation} from "@tanstack/react-query"
import {Matrix as MatrixProps} from "@/common/interfaces/matrix"
import {challenge} from "@/common/api/api-gateway";


const Matrix = () => {
  const [matrix, setMatrix] = useState<number[][]>([]);

  const { columns, rows, setResponse } = useMatrixContext();

  useEffect(() => {
    const newData = Array.from({ length: rows }, () => Array(columns).fill(0));
    setMatrix(newData);
  }, [rows, columns]);

  const handleChange = (
    rowIndex: number,
    columnIndex: number,
    value: number
  ) => {
    const newData = [...matrix]
    newData[rowIndex][columnIndex] = value

    setMatrix(newData)
  }


  const {mutate, isPending, isSuccess} = useMutation(
      {
        mutationFn: async (data: MatrixProps) =>await challenge(data),
        onSuccess: (data) => {
          toast.success("Calculado correctamente 🎉")
          setResponse(data)
        },
        onError: () => {
          toast.error("Error al calcular la factorización")
        }
      }
  )

  const handleSubmit = async () => {
    if (!rows || !columns || !validateEmptyMatrix(matrix)) {
      toast.error("Ingresa todos los valores de la matriz")

      return
    }

    mutate({matrix: matrix})
  }

  if (isPending) {
    toast.info("Calculando ...")
  }

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

export default Matrix;
