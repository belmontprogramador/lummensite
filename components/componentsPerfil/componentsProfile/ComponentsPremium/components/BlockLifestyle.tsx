"use client";

import { useTranslation } from "react-i18next";
import PreferenceBlock from "@/components/componentsPerfil/componentsProfile/ComponentsPremium/components/PreferenceBlock";
import PreferenceChip from "@/components/componentsPerfil/componentsProfile/ComponentsPremium/components/PreferenceChip";

interface Props {
  enums?: any;
  form?: any;
  onToggle?: (field: string, value: string) => void;
}

export default function BlockLifestyle({
  enums = {},
  form = {},
  onToggle = () => {},
}: Props) {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">

      {/* PETS */}
      <PreferenceBlock title={t("profile.lifestyle.pets")}>
        <div className="flex flex-wrap gap-2">
          {(enums.PetsPreference ?? []).map((o: any) => (
            <PreferenceChip
              key={o.value}
              label={o.label}
              active={(form.pets ?? []).includes(o.value)}
              onClick={() => onToggle("pets", o.value)}
            />
          ))}
        </div>
      </PreferenceBlock>

      {/* SMOKING */}
      <PreferenceBlock title={t("profile.lifestyle.smoking")}>
        <div className="flex flex-wrap gap-2">
          {(enums.SmokingStatus ?? []).map((o: any) => (
            <PreferenceChip
              key={o.value}
              label={o.label}
              active={(form.smoking ?? []).includes(o.value)}
              onClick={() => onToggle("smoking", o.value)}
            />
          ))}
        </div>
      </PreferenceBlock>

      {/* DRINKING */}
      <PreferenceBlock title={t("profile.lifestyle.drinking")}>
        <div className="flex flex-wrap gap-2">
          {(enums.DrinkingStatus ?? []).map((o: any) => (
            <PreferenceChip
              key={o.value}
              label={o.label}
              active={(form.drinking ?? []).includes(o.value)}
              onClick={() => onToggle("drinking", o.value)}
            />
          ))}
        </div>
      </PreferenceBlock>

      {/* ACTIVITY LEVEL */}
      <PreferenceBlock title={t("profile.lifestyle.activityLevel")}>
        <div className="flex flex-wrap gap-2">
          {(enums.ActivityFrequency ?? []).map((o: any) => (
            <PreferenceChip
              key={o.value}
              label={o.label}
              active={(form.activityLevel ?? []).includes(o.value)}
              onClick={() => onToggle("activityLevel", o.value)}
            />
          ))}
        </div>
      </PreferenceBlock>

      {/* COMMUNICATION */}
      <PreferenceBlock title={t("profile.lifestyle.communication")}>
        <div className="flex flex-wrap gap-2">
          {(enums.CommunicationStyle ?? []).map((o: any) => (
            <PreferenceChip
              key={o.value}
              label={o.label}
              active={(form.communication ?? []).includes(o.value)}
              onClick={() => onToggle("communication", o.value)}
            />
          ))}
        </div>
      </PreferenceBlock>

    </div>
  );
}
