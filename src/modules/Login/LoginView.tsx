import Link from "next/link";
import LoginForm from "./components/LoginForm";

const LoginView = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-8 min-h-screen w-full">
      <div className="border border-neutral-200 rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>
        <LoginForm />
      </div>
      <p>
        ¿No tienes cuenta?{" "}
        <Link
          href="/register"
          className="text-blue-600 hover:underline font-semibold"
        >
          Regístrate
        </Link>
      </p>
    </main>
  );
};

export default LoginView;
