import { ReactNode, createContext, useContext, useState } from "react";
import { MatrixData, Result } from "../interfaces/matrix";

const MatrizProviderContext = createContext({} as MatrizProviderContextProps);

const MatrizProvider = ({ children }: MatrizProviderProps) => {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const [data, setData] = useState<MatrixData>({} as MatrixData);

  const matrizQ = data.q;
  const matrizR = data.r;

  const resultQ = data.result_Q;
  const resultR = data.result_R;

  return (
    <MatrizProviderContext.Provider
      value={{
        columns,
        setColumns,
        rows,
        setRows,
        data,
        setData,
        matrizQ,
        matrizR,
        resultQ,
        resultR,
      }}
    >
      {children}
    </MatrizProviderContext.Provider>
  );
};

type MatrizProviderProps = {
  children: ReactNode;
};

type MatrizProviderContextProps = {
  columns: number;
  setColumns: (columns: number) => void;
  rows: number;
  setRows: (rows: number) => void;
  data: MatrixData;
  setData: (data: MatrixData) => void;
  matrizQ: number[][];
  matrizR: number[][];
  resultQ: Result;
  resultR: Result;
};

export const useMatrizProviderContext = () => useContext(MatrizProviderContext);

export default MatrizProvider;
