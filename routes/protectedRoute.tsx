import { useRouter } from "next/router";
import { useAuth } from "@/context/auth-context";
import { useEffect } from "react";

export const ProtectedRoute = ({ children }: any) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, []);

  return children;
};
