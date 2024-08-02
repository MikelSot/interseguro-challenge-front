import AuthWrapper from "@/common/wrappers/AuthWrapper";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthWrapper>
      <Component {...pageProps} />
    </AuthWrapper>
  );
};

export default MyApp;
