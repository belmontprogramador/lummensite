// src/components/componentsPerfil/componentsProfile/ComponentsPremium/components/profileBasic.tsx
"use client";

import BlockBasicInfo from "@/components/componentsPerfil/componentsProfile/ComponentsPremium/components/BlockBasicInfo";
import BlockLocation from "@/components/componentsPerfil/componentsProfile/ComponentsPremium/components/BlockLocation";

interface Props {
  enums?: any;
  form?: any;
  onChange?: (field: string, value: any) => void;
  onToggle?: (field: string, value: string) => void;
}

export default function ProfileBasic({
  enums = {},
  form = {},
  onChange = () => {},
  onToggle = () => {},
}: Props) {
  return (
    <div className="w-full pb-6">
      <div className="flex flex-col w-full px-4 pt-4 space-y-6">
        
        {/* 🔹 Informações Básicas */}
        <BlockBasicInfo
          enums={enums}
          form={form}
          onChange={onChange}
          onToggle={onToggle}
        />

        {/* 🔹 Localização */}
        <BlockLocation 
          form={form}
          onChange={onChange}
        />

      </div>
    </div>
  );
}
