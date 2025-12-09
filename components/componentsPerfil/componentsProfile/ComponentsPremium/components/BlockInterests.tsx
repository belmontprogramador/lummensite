"use client";

import { useTranslation } from "react-i18next";

import PreferenceBlock from "@/components/componentsPerfil/componentsProfile/ComponentsPremium/components/PreferenceBlock";
import PreferenceChip from "@/components/componentsPerfil/componentsProfile/ComponentsPremium/components/PreferenceChip";

interface Props {
  enums: any;
  form: any;
  onToggle: (field: string, value: string) => void;
}

export default function BlockInterests({ enums = {}, form = {}, onToggle }: Props) {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      
      {/* ACTIVITIES */}
      <PreferenceBlock title={t("profile.interests.activities")}>
        <div className="flex flex-wrap gap-2">
          {(enums.InterestActivity ?? []).map((o: any) => (
            <PreferenceChip
              key={o.value}
              label={o.label}
              active={(form.interestsActivities ?? []).includes(o.value)}
              onClick={() => onToggle("interestsActivities", o.value)}
            />
          ))}
        </div>
      </PreferenceBlock>

      {/* LIFESTYLE */}
      <PreferenceBlock title={t("profile.interests.lifestyle")}>
        <div className="flex flex-wrap gap-2">
          {(enums.InterestLifestyle ?? []).map((o: any) => (
            <PreferenceChip
              key={o.value}
              label={o.label}
              active={(form.interestsLifestyle ?? []).includes(o.value)}
              onClick={() => onToggle("interestsLifestyle", o.value)}
            />
          ))}
        </div>
      </PreferenceBlock>

      {/* CREATIVITY */}
      <PreferenceBlock title={t("profile.interests.creativity")}>
        <div className="flex flex-wrap gap-2">
          {(enums.InterestCreativity ?? []).map((o: any) => (
            <PreferenceChip
              key={o.value}
              label={o.label}
              active={(form.interestsCreativity ?? []).includes(o.value)}
              onClick={() => onToggle("interestsCreativity", o.value)}
            />
          ))}
        </div>
      </PreferenceBlock>

      {/* SPORTS & FITNESS */}
      <PreferenceBlock title={t("profile.interests.sportsFitness")}>
        <div className="flex flex-wrap gap-2">
          {(enums.InterestSports ?? []).map((o: any) => (
            <PreferenceChip
              key={o.value}
              label={o.label}
              active={(form.interestsSportsFitness ?? []).includes(o.value)}
              onClick={() => onToggle("interestsSportsFitness", o.value)}
            />
          ))}
        </div>
      </PreferenceBlock>

      {/* MUSIC */}
      <PreferenceBlock title={t("profile.interests.music")}>
        <div className="flex flex-wrap gap-2">
          {(enums.InterestMusic ?? []).map((o: any) => (
            <PreferenceChip
              key={o.value}
              label={o.label}
              active={(form.interestsMusic ?? []).includes(o.value)}
              onClick={() => onToggle("interestsMusic", o.value)}
            />
          ))}
        </div>
      </PreferenceBlock>

      {/* NIGHTLIFE */}
      <PreferenceBlock title={t("profile.interests.nightlife")}>
        <div className="flex flex-wrap gap-2">
          {(enums.InterestNightlife ?? []).map((o: any) => (
            <PreferenceChip
              key={o.value}
              label={o.label}
              active={(form.interestsNightlife ?? []).includes(o.value)}
              onClick={() => onToggle("interestsNightlife", o.value)}
            />
          ))}
        </div>
      </PreferenceBlock>

      {/* TV & CINEMA */}
      <PreferenceBlock title={t("profile.interests.tvCinema")}>
        <div className="flex flex-wrap gap-2">
          {(enums.InterestTvCinema ?? []).map((o: any) => (
            <PreferenceChip
              key={o.value}
              label={o.label}
              active={(form.interestsTvCinema ?? []).includes(o.value)}
              onClick={() => onToggle("interestsTvCinema", o.value)}
            />
          ))}
        </div>
      </PreferenceBlock>

    </div>
  );
}
