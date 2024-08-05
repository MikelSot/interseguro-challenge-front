import ButtonBase from "@/common/components/atoms/buttons/ButtonBase";
import InputForm from "@/common/components/atoms/form/InputForm";
import { useMatrixContext } from "@/common/providers/Matrix";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { GenerateBoardFormValues } from "../HomeView";
import { GenerateBoardFormSchema } from "../schemas/generateBoardFormSchema";

const MatrixForm = () => {
  const { setColumns, setRows, matrixQ, matrixR } = useMatrixContext();

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<GenerateBoardFormValues>({
    resolver: joiResolver(GenerateBoardFormSchema),
    mode: "onChange",
  });

  const handleSubmit = async (
    values: GenerateBoardFormValues
  ): Promise<void> => {
    if (!values.columns || !values.rows) {
      toast.error("Ingresa los valores positivos de columnas y filas");
      return;
    }

    setColumns(values.columns);
    setRows(values.rows);
  };

  const formatMatrix = (matrix: number[][]): string => {
    return `[\n  ${matrix
      .map((row) => `[${row.join(", ")}]`)
      .join(",\n  ")}\n]`;
  };

  return (
    <div className="flex flex-col gap-4 lg:h-96 w-full">
      <h1 className="text-2xl font-bold mb-2">Generar matriz</h1>
      <form
        className="w-full grid md:grid-cols-2 gap-4 lg:gap-6"
        onSubmit={onSubmit(handleSubmit)}
      >
        <InputForm
          id="columns"
          type="number"
          label="Columnas"
          inputClasses="text-sm p-2"
          placeholder="Escribe numero de columnas"
          errors={errors.columns}
          {...register("columns")}
          min={1}
        />
        <InputForm
          id="rows"
          type="number"
          label="Filas"
          inputClasses="text-sm p-2"
          placeholder="Escribe numero de filas"
          errors={errors.rows}
          {...register("rows")}
          min={1}
        />
        <ButtonBase
          type="submit"
          className="col-span-full hover:bg-blue-600 dark:hover:bg-blue-400 w-full transition-colors"
          text="Siguiente"
        />
      </form>
      <div className="grid grid-cols-2 border rounded divide-x overflow-auto text-sm">
        {matrixQ && (
          <div className="p-4 overflow-auto">
            <h3 className="font-semibold">Factorización Q</h3>
            <pre style={{ whiteSpace: "pre" }}>
              <code>{`q: ${formatMatrix(matrixQ)}`}</code>
            </pre>
          </div>
        )}
        {matrixR && (
          <div className="p-4 overflow-auto">
            <h3 className="font-semibold">Factorización R</h3>
            <pre style={{ whiteSpace: "pre" }}>
              <code>{`r: ${formatMatrix(matrixR)}`}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatrixForm;
