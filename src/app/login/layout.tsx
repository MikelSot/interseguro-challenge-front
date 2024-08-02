import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Iniciar sesión",
  description: "Inicia sesión en la plataforma",
};

const LoginLayout = ({ children }: LoginLayoutProps) => {
  return <>{children}</>;
};

type LoginLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default LoginLayout;
