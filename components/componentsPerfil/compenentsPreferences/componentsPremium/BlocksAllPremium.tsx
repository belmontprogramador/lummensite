// src/components/compenentsPreferences/componentsPremium/BlocksAllPremium.tsx

import BlockPronouns from "./BlockPronouns";
import BlockZodiac from "./BlockZodiac";
import BlockPets from "./BlockPets";
import BlockSmoking from "./BlockSmoking";
import BlockDrinking from "./BlockDrinking";
import BlockActivity from "./BlockActivity";
import BlockCommunication from "./BlockCommunication";
import BlockEducation from "./BlockEducation";
import BlockLanguages from "./BlockLanguages";

import BlockInterestsActivities from "./BlockInterestsActivities";
import BlockInterestsLifestyle from "./BlockInterestsLifestyle";
import BlockInterestsCreativity from "./BlockInterestsCreativity";
import BlockInterestsSports from "./BlockInterestsSports";
import BlockInterestsMusic from "./BlockInterestsMusic";
import BlockInterestsNightlife from "./BlockInterestsNightlife";
import BlockInterestsTvCinema from "./BlockInterestsTvCinema";

interface PremiumOption {
  value: string;
  label: string;
}

interface PremiumOptionsObject {
  Pronoun?: PremiumOption[];
  ZodiacSign?: PremiumOption[];
  PetsPreference?: PremiumOption[];
  SmokingStatus?: PremiumOption[];
  DrinkingStatus?: PremiumOption[];
  ActivityFrequency?: PremiumOption[];
  CommunicationStyle?: PremiumOption[];
  EducationLevel?: PremiumOption[];
  Language?: PremiumOption[];

  // INTERESTS
  InterestActivity?: PremiumOption[];
  InterestLifestyle?: PremiumOption[];
  InterestCreativity?: PremiumOption[];
  InterestSports?: PremiumOption[];
  InterestMusic?: PremiumOption[];
  InterestNightlife?: PremiumOption[];
  InterestTvCinema?: PremiumOption[];
}

interface PremiumPrefs {
  preferredPronouns?: string[];
  preferredZodiacs?: string[];
  preferredPets?: string[];
  preferredSmoking?: string[];
  preferredDrinking?: string[];
  preferredActivityLevel?: string[];
  preferredCommunication?: string[];
  preferredEducationLevels?: string[];
  preferredLanguages?: string[];

  preferredInterestsActivities?: string[];
  preferredInterestsLifestyle?: string[];
  preferredInterestsCreativity?: string[];
  preferredInterestsSportsFitness?: string[];
  preferredInterestsMusic?: string[];
  preferredInterestsNightlife?: string[];
  preferredInterestsTvCinema?: string[];
}

interface Props {
  options: PremiumOptionsObject;
  prefs: PremiumPrefs;
  toggle: (field: keyof PremiumPrefs, value: string) => void;
}

export default function BlocksAllPremium({ options, prefs, toggle }: Props) {
  return (
    <>
      <BlockPronouns
        options={options.Pronoun ?? []}
        prefs={prefs.preferredPronouns ?? []}
        onToggle={(v) => toggle("preferredPronouns", v)}
      />

      <BlockZodiac
  options={options.ZodiacSign ?? []}
  prefs={prefs.preferredZodiacs ?? []}
  onToggle={(v: string) => toggle("preferredZodiacs", v)}
/>

      <BlockPets
        options={options.PetsPreference ?? []}
        prefs={prefs.preferredPets ?? []}
        onToggle={(v) => toggle("preferredPets", v)}
      />

     <BlockSmoking
  options={options.SmokingStatus ?? []}
  prefs={prefs.preferredSmoking ?? []}
  onToggle={(v: string) => toggle("preferredSmoking", v)}
/>

<BlockDrinking
  options={options.DrinkingStatus ?? []}
  prefs={prefs.preferredDrinking ?? []}
  onToggle={(v: string) => toggle("preferredDrinking", v)}
/>


      <BlockActivity
        options={options.ActivityFrequency ?? []}
        prefs={prefs.preferredActivityLevel ?? []}
        onToggle={(v) => toggle("preferredActivityLevel", v)}
      />

      <BlockCommunication
        options={options.CommunicationStyle ?? []}
        prefs={prefs.preferredCommunication ?? []}
        onToggle={(v) => toggle("preferredCommunication", v)}
      />

      <BlockEducation
        options={options.EducationLevel ?? []}
        prefs={prefs.preferredEducationLevels ?? []}
        onToggle={(v) => toggle("preferredEducationLevels", v)}
      />

      <BlockLanguages
        options={options.Language ?? []}
        prefs={prefs.preferredLanguages ?? []}
        onToggle={(v) => toggle("preferredLanguages", v)}
      />

      {/* INTERESTS */}
      <BlockInterestsActivities
        options={options.InterestActivity ?? []}
        prefs={prefs.preferredInterestsActivities ?? []}
        onToggle={(v) => toggle("preferredInterestsActivities", v)}
      />

      <BlockInterestsLifestyle
        options={options.InterestLifestyle ?? []}
        prefs={prefs.preferredInterestsLifestyle ?? []}
        onToggle={(v) => toggle("preferredInterestsLifestyle", v)}
      />

      <BlockInterestsCreativity
        options={options.InterestCreativity ?? []}
        prefs={prefs.preferredInterestsCreativity ?? []}
        onToggle={(v) => toggle("preferredInterestsCreativity", v)}
      />

      <BlockInterestsSports
        options={options.InterestSports ?? []}
        prefs={prefs.preferredInterestsSportsFitness ?? []}
        onToggle={(v) => toggle("preferredInterestsSportsFitness", v)}
      />

      <BlockInterestsMusic
        options={options.InterestMusic ?? []}
        prefs={prefs.preferredInterestsMusic ?? []}
        onToggle={(v) => toggle("preferredInterestsMusic", v)}
      />

      <BlockInterestsNightlife
        options={options.InterestNightlife ?? []}
        prefs={prefs.preferredInterestsNightlife ?? []}
        onToggle={(v) => toggle("preferredInterestsNightlife", v)}
      />

      <BlockInterestsTvCinema
        options={options.InterestTvCinema ?? []}
        prefs={prefs.preferredInterestsTvCinema ?? []}
        onToggle={(v) => toggle("preferredInterestsTvCinema", v)}
      />
    </>
  );
}
