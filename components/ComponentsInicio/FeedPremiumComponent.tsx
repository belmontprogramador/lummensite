"use client";

import { useTranslation } from "react-i18next";

export default function FeedPremiumComponent({ user }: any) {
  const { t } = useTranslation();
  const profile = user.profile || {};

  const premiumKeys = [
    "bio",
    "birthday",
    "gender",
    "orientation",
    "city",
    "state",
    "country",
    "pronoun",
    "intention",
    "relationshipType",

    "jobTitle",
    "company",
    "heightCm",
    "educationLevel",
    "languages",
    "pets",
    "smoking",
    "drinking",
    "activityLevel",
    "communication",
    "zodiac",
  ];

  const labels: Record<string, string> = {
    bio: t("feedPremium.bio"),
    birthday: t("feedPremium.birthday"),
    gender: t("feedPremium.gender"),
    orientation: t("feedPremium.orientation"),
    city: t("feedPremium.city"),
    state: t("feedPremium.state"),
    country: t("feedPremium.country"),
    pronoun: t("feedPremium.pronoun"),
    intention: t("feedPremium.intention"),
    relationshipType: t("feedPremium.relationshipType"),

    jobTitle: t("feedPremium.jobTitle"),
    company: t("feedPremium.company"),
    heightCm: t("feedPremium.heightCm"),

    educationLevel: t("feedPremium.educationLevel"),
    languages: t("feedPremium.languages"),
    pets: t("feedPremium.pets"),
    smoking: t("feedPremium.smoking"),
    drinking: t("feedPremium.drinking"),
    activityLevel: t("feedPremium.activityLevel"),
    communication: t("feedPremium.communication"),
    zodiac: t("feedPremium.zodiac"),
  };

  const getAge = (date: string) => {
    if (!date) return null;
    const d = new Date(date);
    const now = new Date();
    let age = now.getFullYear() - d.getFullYear();

    if (
      now.getMonth() < d.getMonth() ||
      (now.getMonth() === d.getMonth() && now.getDate() < d.getDate())
    ) {
      age--;
    }

    return age;
  };

  const normalizeValue = (key: string, value: any) => {
    if (
      value === null ||
      value === undefined ||
      value === "" ||
      (Array.isArray(value) && value.length === 0)
    ) {
      return "—";
    }

    if (key === "birthday") {
      return `${getAge(value)} ${t("feedPremium.years")}`;
    }

    if (Array.isArray(value)) return value.join(", ");

    return value.toString();
  };

  return (
    <section className="mt-6">
      {/* Título */}
      <h2 className="text-2xl font-bold mb-4">
        {t("feedPremium.about")}
      </h2>

      {/* Lista Premium */}
      <div className="space-y-2">
        {premiumKeys.map((key) => (
          <p key={key} className="text-base text-gray-700">
            <span className="font-semibold">{labels[key] || key}:</span>{" "}
            {normalizeValue(key, profile[key])}
          </p>
        ))}
      </div>
    </section>
  );
}
