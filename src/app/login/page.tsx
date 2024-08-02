"use client";

import dynamic from "next/dynamic";

const LoginView = dynamic(() => import("@/modules/Login/LoginView"), {
  ssr: false,
});

const page = () => {
  return <LoginView />;
};

export default page;
