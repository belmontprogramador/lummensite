"use client";

import { useTranslation } from "react-i18next";

export default function UserPreferencesView({ preference }: any) {
  const { t } = useTranslation();
  const pref = preference || {};

  // ❌ Campos que não devem aparecer
  const hiddenPrefKeys = ["userId", "createdAt", "updatedAt"];

  // Filtra somente chaves válidas
  const preferenceKeys = Object.keys(pref).filter(
    (key) => !hiddenPrefKeys.includes(key)
  );

  // Labels traduzidos
  const labels: any = {
    preferredGenders: t("userPreferences.fields.preferredGenders"),
    preferredOrientations: t("userPreferences.fields.preferredOrientations"),
    preferredPronouns: t("userPreferences.fields.preferredPronouns"),
    heightCm: t("userPreferences.fields.heightCm"),
    preferredIntentions: t("userPreferences.fields.preferredIntentions"),
    preferredRelationshipTypes: t("userPreferences.fields.preferredRelationshipTypes"),
    preferredZodiacs: t("userPreferences.fields.preferredZodiacs"),
    preferredPets: t("userPreferences.fields.preferredPets"),
    preferredSmoking: t("userPreferences.fields.preferredSmoking"),
    preferredDrinking: t("userPreferences.fields.preferredDrinking"),
    preferredActivityLevel: t("userPreferences.fields.preferredActivityLevel"),
    preferredCommunication: t("userPreferences.fields.preferredCommunication"),
    jobTitle: t("userPreferences.fields.jobTitle"),
    company: t("userPreferences.fields.company"),
    preferredEducationLevels: t("userPreferences.fields.preferredEducationLevels"),
    preferredLanguages: t("userPreferences.fields.preferredLanguages"),
    preferredInterestsActivities: t("userPreferences.fields.preferredInterestsActivities"),
    preferredInterestsLifestyle: t("userPreferences.fields.preferredInterestsLifestyle"),
    preferredInterestsCreativity: t("userPreferences.fields.preferredInterestsCreativity"),
    preferredInterestsSportsFitness: t("userPreferences.fields.preferredInterestsSportsFitness"),
    preferredInterestsMusic: t("userPreferences.fields.preferredInterestsMusic"),
    preferredInterestsNightlife: t("userPreferences.fields.preferredInterestsNightlife"),
    preferredInterestsTvCinema: t("userPreferences.fields.preferredInterestsTvCinema"),
    maxDistanceKm: t("userPreferences.fields.maxDistanceKm"),
    ageMin: t("userPreferences.fields.ageMin"),
    ageMax: t("userPreferences.fields.ageMax"),
  };

  const normalizeValue = (value: any) => {
    if (
      value === null ||
      value === undefined ||
      value === "" ||
      (Array.isArray(value) && value.length === 0)
    ) {
      return "—";
    }

    if (Array.isArray(value)) return value.join(", ");

    return value.toString();
  };

  return (
    <div className="mt-6">
      {/* Título */}
      <p className="text-2xl font-bold mb-3">
        {t("userPreferences.title")}
      </p>

      {/* Lista de preferências */}
      <div className="space-y-2">
        {preferenceKeys.map((key) => (
          <p key={key} className="text-base text-gray-700">
            <span className="font-semibold">
              {labels[key] || key}:
            </span>{" "}
            {normalizeValue(pref[key])}
          </p>
        ))}
      </div>
    </div>
  );
}
