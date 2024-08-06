import ButtonBase from "@/common/components/atoms/buttons/ButtonBase";
import InputForm from "@/common/components/atoms/form/InputForm";
import { setToken } from "@/common/helpers/auth";
import { joiResolver } from "@hookform/resolvers/joi";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { LoginFormSchema } from "../schemas/login";
import {useMutation} from "@tanstack/react-query";
import {login} from "@/common/api/api-gateway";
import {toast} from "react-toastify";

const LoginForm = () => {
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>({
    resolver: joiResolver(LoginFormSchema),
    mode: "onChange",
  });



  const {mutate, isPending} = useMutation(
      {
        mutationFn: async (data: LoginFormProps) =>await login(data.email, data.password),
        onSuccess: (data) => {
          toast.success("Sesión iniciada 🎉")
          setToken(data.token)
          window.location.href = "/";
        },
        onError: () => {
          toast.error("Error al iniciar sesión")
        }
      }
  )

  const handleSubmit = async (data: LoginFormProps) => {
    mutate(data)
  }

  if (isPending) {
    toast.info("Cargando ...")
  }

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
        />
      </form>
    </>
  );
};

type LoginFormProps = {
  email: string;
  password: string;
};

export default LoginForm;
