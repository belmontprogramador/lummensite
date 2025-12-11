"use client";

import { useState, PropsWithChildren } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CollapsibleProps extends PropsWithChildren {
  title: string;
}

export function Collapsible({ children, title }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-2">
      {/* Header */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="flex items-center gap-2 cursor-pointer select-none"
      >
        <ChevronRight
          className={cn(
            "h-4 w-4 transition-transform",
            isOpen && "rotate-90"
          )}
        />
        <span className="font-semibold">{title}</span>
      </button>

      {/* Content */}
      {isOpen && <div className="ml-6">{children}</div>}
    </div>
  );
}
