"use client"

import dynamic from "next/dynamic"

const HomeView = dynamic(() => import("@/modules/Home/HomeView"), {
  ssr: false,
})

const MatrixProvider = dynamic(
  () => import("@/common/providers/Matrix"),
  {
    ssr: false,
  }
)

const Home =()  =>{
  return (
    <MatrixProvider>
      <HomeView />
    </MatrixProvider>
  );
}

export default Home
