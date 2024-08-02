import Link from "next/link";
import RegisterForm from "./components/RegisterForm";

const RegisterView = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-8 min-h-screen w-full">
      <div className="border border-neutral-200 rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-4">Regístrate</h1>
        <RegisterForm />
      </div>
      <p>
        ¿Ya tienes cuenta?{" "}
        <Link
          href="/login"
          className="text-blue-600 hover:underline font-semibold"
        >
          Inicia sesión
        </Link>
      </p>
    </main>
  );
};

export default RegisterView;
