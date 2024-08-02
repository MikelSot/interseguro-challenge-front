"use client";

import dynamic from "next/dynamic";

const HomeView = dynamic(() => import("@/modules/Home/HomeView"), {
  ssr: false,
});

const MatrizProvider = dynamic(
  () => import("@/common/providers/MatrizProvider"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <MatrizProvider>
      <HomeView />
    </MatrizProvider>
  );
}
