import ButtonBase from "@/common/components/atoms/buttons/ButtonBase";
import InputForm from "@/common/components/atoms/form/InputForm";
import { login } from "@/common/helpers/auth.helper";
import { joiResolver } from "@hookform/resolvers/joi";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { LoginFormSchema } from "../schemas/loginFormSchema";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0QGVtYWlsLmNvbSIsImlhdCI6MTYzNjIwNjQwMCwiZXhwIjoxNjM2MjA2NDAwfQ.1Z0ZQv5rLZ4Z7j1e9u4w1B2Y2vzQ8T3Q5x9tqLpHbWU";

const LoginForm = () => {
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: joiResolver(LoginFormSchema),
    mode: "onChange",
  });

  const handleSubmit = async ({
    email,
    password,
  }: LoginFormValues): Promise<void> => {
    try {
      console.log({ email, password });

      login(token);

      window.location.href = "/";
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <>
      <form
        className="flex flex-col gap-6 mb-4"
        onSubmit={onSubmit(handleSubmit)}
      >
        <InputForm
          id="email"
          type="email"
          label="Correo electrónico"
          className="text-neutral-text"
          inputClasses={classNames(
            { "border-red-500": errors.email },
            "dark:bg-neutral-border-medium "
          )}
          placeholder="Escribe tu correo electrónico"
          errors={errors.email}
          {...register("email")}
        />
        <InputForm
          id="password"
          type="password"
          label="Contraseña"
          placeholder="Escribe tu contraseña"
          autoComplete="off"
          className="text-neutral-text"
          inputClasses="dark:bg-neutral-border-medium"
          errors={errors.password}
          {...register("password")}
        />
        <ButtonBase
          type="submit"
          className="hover:bg-blue-600 dark:hover:bg-blue-400 w-full transition-colors"
          text="Iniciar sesión"
          // text={isLoading ? "Cargando..." : "Iniciar sesión"}
          // disabled={isLoading}
        />
      </form>
    </>
  );
};

type LoginFormValues = {
  email: string;
  password: string;
};

export default LoginForm;
