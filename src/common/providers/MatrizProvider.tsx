import { ReactNode, createContext, useContext, useState } from "react";
import { Matriz, Result } from "../interfaces/matriz";

const MatrizProviderContext = createContext({} as MatrizProviderContextProps);

const MatrizProvider = ({ children }: MatrizProviderProps) => {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const [data, setData] = useState<Matriz>({} as Matriz);

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
  data: Matriz;
  setData: (data: Matriz) => void;
  matrizQ: number[][];
  matrizR: number[][];
  resultQ: Result;
  resultR: Result;
};

export const useMatrizProviderContext = () => useContext(MatrizProviderContext);

export default MatrizProvider;
