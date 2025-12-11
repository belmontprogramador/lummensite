"use client";

import { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import { Loader2 } from "lucide-react";

export default function AereaShowPage() {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    if (loading) return;

    if (!user) {
      router.replace("/login");
    } else {
      router.replace("/inicio");
    }
  }, [loading, user, router]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#050509]">
      <Loader2 className="h-10 w-10 animate-spin text-[#9f45ff]" />
    </div>
  );
}
