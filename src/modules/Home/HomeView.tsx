import { useMatrixContext } from "@/common/providers/Matrix";
import Matrix from "./components/Matrix";
import MatrixForm from "./components/MatrixForm";
import MatrixResult from "./components/MatrixResult";

const HomeView = () => {
  const { resultQ, resultR } = useMatrixContext();

  return (
    <main className="max-w-7xl min-h-screen m-auto p-8 flex flex-col justify-center items-center gap-6">
      <div className="grid lg:grid-cols-2 place-content-center gap-10 w-full">
        <MatrixForm />
        <Matrix />
      </div>
      <div className="grid lg:grid-cols-2 place-content-center gap-10 w-full text-sm">
        <MatrixResult type="Q" result={resultQ} />
        <MatrixResult type="R" result={resultR} />
      </div>
    </main>
  );
};

export type GenerateBoardFormValues = {
  columns: number;
  rows: number;
};

export default HomeView;
