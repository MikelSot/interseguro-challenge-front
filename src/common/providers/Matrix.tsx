import { ReactNode, createContext, useContext, useState } from "react";
import { MatrixData, Result } from "../interfaces/matrix";

const MatrixContext = createContext({} as MatrixContextProps);

const MatrixProvider = ({ children }: MatrixProps) => {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const [data, setData] = useState<MatrixData>({} as MatrixData);

  const matrixQ = data.q;
  const matrixR = data.r;

  const resultQ = data.result_Q;
  const resultR = data.result_R;

  return (
    <MatrixContext.Provider
      value={{
        columns,
        setColumns,
        rows,
        setRows,
        data,
        setData,
        matrixQ: matrixQ,
        matrixR: matrixR,
        resultQ,
        resultR,
      }}
    >
      {children}
    </MatrixContext.Provider>
  );
};

type MatrixProps = {
  children: ReactNode;
};

type MatrixContextProps = {
  columns: number;
  setColumns: (columns: number) => void;
  rows: number;
  setRows: (rows: number) => void;
  data: MatrixData;
  setData: (data: MatrixData) => void;
  matrixQ: number[][];
  matrixR: number[][];
  resultQ: Result;
  resultR: Result;
};

export const useMatrixContext = () => useContext(MatrixContext);

export default MatrixProvider;
