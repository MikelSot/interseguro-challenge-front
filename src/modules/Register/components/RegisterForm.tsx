import ButtonBase from "@/common/components/atoms/buttons/ButtonBase";
import InputForm from "@/common/components/atoms/form/InputForm";
import { joiResolver } from "@hookform/resolvers/joi";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { RegisterFormSchema } from "../schemas/registerFormSchema";

const RegisterForm = () => {
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: joiResolver(RegisterFormSchema),
    mode: "onChange",
  });

  const handleSubmit = async (values: RegisterFormValues): Promise<void> => {
    console.log({ values });
  };

  return (
    <>
      <form
        className="grid md:grid-cols-2 gap-4 lg:gap-6"
        onSubmit={onSubmit(handleSubmit)}
      >
        <InputForm
          id="name"
          type="text"
          label="Nombre"
          inputClasses="dark:bg-neutral-border-medium"
          placeholder="Escribe tu nombre"
          errors={errors.firstname}
          {...register("firstname")}
        />
        <InputForm
          id="surname"
          type="text"
          label="Apellido"
          inputClasses="dark:bg-neutral-border-medium"
          placeholder="Escribe tu apellido"
          errors={errors.lastname}
          {...register("lastname")}
        />
        <InputForm
          id="email"
          type="email"
          label="Correo electrónico"
          className="col-span-full"
          inputClasses={classNames(
            { "border-red-500": errors.email },
            "dark:bg-neutral-border-medium"
          )}
          placeholder="Escribe tu correo electrónico"
          errors={errors.email}
          {...register("email")}
        />
        <InputForm
          id="password"
          type="password"
          label="Contraseña"
          inputClasses={classNames(
            {
              "border-red-500": Boolean(errors.password),
            },
            "dark:bg-neutral-border-medium"
          )}
          placeholder="Escribe tu contraseña"
          errors={errors.password}
          autoComplete="off"
          {...register("password")}
        />

        <InputForm
          id="confirmedPassword"
          type="password"
          label="Confirma tu contraseña"
          inputClasses={classNames(
            {
              "border-red-500": Boolean(errors.confirmedPassword),
            },
            "dark:bg-neutral-border-medium"
          )}
          placeholder="Confirma tu contraseña"
          errors={errors.confirmedPassword}
          autoComplete="off"
          {...register("confirmedPassword")}
        />
        <ButtonBase
          type="submit"
          className="col-span-full hover:bg-blue-600 dark:hover:bg-blue-400 w-full transition-colors"
          text="Registrarse"
          // text={isLoading ? "Cargando..." : "Iniciar sesión"}
          // disabled={isLoading}
        />
      </form>
    </>
  );
};

export type RegisterFormValues = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmedPassword: string;
};

export default RegisterForm;
