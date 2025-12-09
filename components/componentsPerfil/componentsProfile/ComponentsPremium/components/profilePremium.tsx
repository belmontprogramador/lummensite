// src/components/componentsPerfil/componentsProfile/ComponentsPremium/components/profilePremium.tsx

"use client";

import BlockLifestyle from "@/components/componentsPerfil/componentsProfile/ComponentsPremium/components/BlockLifestyle";
import BlockWorkEducation from "@/components/componentsPerfil/componentsProfile/ComponentsPremium/components/BlockWorkEducation";
import BlockLanguages from "@/components/componentsPerfil/componentsProfile/ComponentsPremium/components/BlockLanguages";
import BlockInterests from "@/components/componentsPerfil/componentsProfile/ComponentsPremium/components/BlockInterests";

import { ScrollArea } from "@/components/ui/scroll-area";

interface Props {
  enums?: any;
  form?: any;
  onChange?: (field: string, value: any) => void;
  onToggle?: (field: string, value: string) => void;
}

export default function ProfilePremium({
  enums = {},
  form = {},
  onChange = () => {},
  onToggle = () => {},
}: Props) {
  return (
    <ScrollArea className="h-full w-full pb-6">
      <div className="space-y-6 p-4">
        
        {/* 🔹 Lifestyle */}
        <BlockLifestyle enums={enums} form={form} onToggle={onToggle} />

        {/* 🔹 Trabalho e Educação */}
        <BlockWorkEducation
          enums={enums}
          form={form}
          onChange={onChange}
          onToggle={onToggle}
        />

        {/* 🔹 Línguas */}
        <BlockLanguages enums={enums} form={form} onToggle={onToggle} />

        {/* 🔹 Interesses */}
        <BlockInterests enums={enums} form={form} onToggle={onToggle} />
      </div>
    </ScrollArea>
  );
}
