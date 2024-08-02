import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { isAuthenticated, removeExpiredToken } from "../helpers/auth.helper";

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    removeExpiredToken();

    const checkAuth = () => {
      const isAuth = isAuthenticated();

      if (!isAuth) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

type AuthWrapperProps = {
  children: ReactNode;
};

export default AuthWrapper;
