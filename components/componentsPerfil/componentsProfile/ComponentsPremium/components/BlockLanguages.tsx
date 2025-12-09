"use client";

import { useTranslation } from "react-i18next";
import PreferenceBlock from "@/components/componentsPerfil/componentsProfile/ComponentsPremium/components/PreferenceBlock";
import PreferenceChip from "@/components/componentsPerfil/componentsProfile/ComponentsPremium/components/PreferenceChip";

interface Props {
  enums?: any;
  form?: any;
  onToggle?: (field: string, value: string) => void;
}

export default function BlockLanguages({
  enums = {},
  form = {},
  onToggle = () => {},
}: Props) {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <PreferenceBlock title={t("profile.languages.title")}>
        <div className="flex flex-wrap gap-2">
          {(enums.Language ?? []).map((o: any) => (
            <PreferenceChip
              key={o.value}
              label={o.label}
              active={(form.languages ?? []).includes(o.value)}
              onClick={() => onToggle("languages", o.value)}
            />
          ))}
        </div>
      </PreferenceBlock>
    </div>
  );
}
