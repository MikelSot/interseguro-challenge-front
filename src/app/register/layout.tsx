import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Registrarse",
  description: "Regístrate en la plataforma",
};

const RegisterLayout = ({ children }: RegisterLayoutProps) => {
  return <>{children}</>;
};

type RegisterLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default RegisterLayout;
