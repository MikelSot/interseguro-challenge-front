"use client";

import dynamic from "next/dynamic";

const RegisterView = dynamic(() => import("@/modules/Register/RegisterView"), {
  ssr: false,
});

const page = () => {
  return <RegisterView />;
};

export default page;
