"use client";

import { useTranslation } from "react-i18next";
import PreferenceBlock from "@/components/componentsPerfil/componentsProfile/ComponentsPremium/components/PreferenceBlock";
import PreferenceChip from "@/components/componentsPerfil/componentsProfile/ComponentsPremium/components/PreferenceChip";
import { Input } from "@/components/ui/input";

interface Props {
  enums: any;
  form: any;
  onChange: (field: string, value: any) => void;
  onToggle: (field: string, value: string) => void;
}

export default function BlockWorkEducation({
  enums = {},
  form = {},
  onChange = () => {},
  onToggle = () => {},
}: Props) {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      {/* JOB TITLE */}
      <PreferenceBlock title={t("profile.work.jobTitle")}>
        <Input
          value={form.jobTitle || ""}
          placeholder={t("profile.work.jobTitlePlaceholder") || ""}
          onChange={(e) => onChange("jobTitle", e.target.value)}
          className="w-full"
        />
      </PreferenceBlock>

      {/* COMPANY */}
      <PreferenceBlock title={t("profile.work.company")}>
        <Input
          value={form.company || ""}
          placeholder={t("profile.work.companyPlaceholder") || ""}
          onChange={(e) => onChange("company", e.target.value)}
          className="w-full"
        />
      </PreferenceBlock>

      {/* EDUCATION LEVEL */}
      <PreferenceBlock title={t("profile.work.educationLevel")}>
        <div className="flex flex-wrap gap-2">
          {(enums.EducationLevel || []).map((o: any) => (
            <PreferenceChip
              key={o.value}
              label={o.label}
              active={(form.educationLevel || []).includes(o.value)}
              onClick={() => onToggle("educationLevel", o.value)}  // ✔️ CORRIGIDO
            />
          ))}
        </div>
      </PreferenceBlock>
    </div>
  );
}
