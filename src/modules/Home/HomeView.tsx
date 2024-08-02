import { useMatrizProviderContext } from "@/common/providers/MatrizProvider";
import Matriz from "./components/Matriz";
import MatrizForm from "./components/MatrizForm";
import MatrizResult from "./components/MatrizResult";

const HomeView = () => {
  const { resultQ, resultR } = useMatrizProviderContext();

  return (
    <main className="max-w-7xl min-h-screen m-auto p-8 flex flex-col justify-center items-center gap-6">
      <div className="grid lg:grid-cols-2 place-content-center gap-10 w-full">
        <MatrizForm />
        <Matriz />
      </div>
      <div className="grid lg:grid-cols-2 place-content-center gap-10 w-full text-sm">
        <MatrizResult type="Q" result={resultQ} />
        <MatrizResult type="R" result={resultR} />
      </div>
    </main>
  );
};

export type GenerateBoardFormValues = {
  columns: number;
  rows: number;
};

export default HomeView;
