"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useAuthGuard() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    function checkAuth() {
      // Só roda no navegador
      const token = localStorage.getItem("@token");

      if (!token) {
        router.replace("/"); // volta para login
        return;
      }

      setLoading(false);
    }

    checkAuth();
  }, [router]);

  return { loading };
}
