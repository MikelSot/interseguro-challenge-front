import { ReactNode, createContext, useContext, useState } from "react";
import {Challenge} from "@/common/interfaces/challenge";

const MatrixContext = createContext({} as MatrixContextProps);

const MatrixProvider = ({ children }: MatrixProps) => {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const [response, setResponse] = useState({} as Challenge);

  return (
    <MatrixContext.Provider
      value={{
        columns,
        setColumns,
        rows,
        setRows,
        response,
        setResponse
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
  response: Challenge
  setResponse: (response: Challenge) => void;
};

export const useMatrixContext = () => useContext(MatrixContext);

export default MatrixProvider;
