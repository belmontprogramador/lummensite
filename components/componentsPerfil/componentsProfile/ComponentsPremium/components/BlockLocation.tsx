"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import PreferenceBlock from "@/components/componentsPerfil/componentsProfile/ComponentsPremium/components/PreferenceBlock";

const GEOAPIFY_KEY = process.env.NEXT_PUBLIC_GEOAPIFY_KEY;

interface Props {
  form: any;
  onChange: (field: string, value: any) => void;
}

export default function BlockLocation({ form = {}, onChange }: Props) {
  const { t } = useTranslation();

  const [query, setQuery] = useState(form.city || "");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length >= 3) fetchSuggestions(query);
      else setSuggestions([]);
    }, 350);

    return () => clearTimeout(timer);
  }, [query]);

  async function fetchSuggestions(text: string) {
    try {
      setLoading(true);
      setError(null);

      const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
        text
      )}&limit=5&apiKey=${GEOAPIFY_KEY}`;

      const res = await fetch(url);
      const data = await res.json();

      if (!data.features) {
        setSuggestions([]);
        setError(t("profile.location.noResults"));
        return;
      }

      const list = data.features.map((f: any) => ({
        city: f.properties.city || f.properties.name,
        state: f.properties.state,
        country: f.properties.country,
        latitude: Number(f.properties.lat),
        longitude: Number(f.properties.lon),
      }));

      setSuggestions(list);
    } catch (err) {
      console.error(err);
      setError(t("profile.location.fetchError"));
    } finally {
      setLoading(false);
    }
  }

  function handleSelect(item: any) {
    setQuery(item.city || "");
    setSuggestions([]);

    onChange("city", item.city ?? "");
    onChange("state", item.state ?? "");
    onChange("country", item.country ?? "");
    onChange("latitude", item.latitude);
    onChange("longitude", item.longitude);
  }

  return (
    <div className="w-full">
      <PreferenceBlock title={t("profile.location.title")}>
        <label className="text-sm font-medium text-gray-700">
          {t("profile.location.searchLabel")}
        </label>

        {/* INPUT */}
        <input
          type="text"
          placeholder={t("profile.location.placeholder") ?? ""}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500"
        />

        {/* LOADING */}
        {loading && (
          <div className="text-purple-600 text-sm mt-2">
            {t("loading")}...
          </div>
        )}

        {/* ERROR */}
        {error && !loading && (
          <p className="text-red-500 text-sm mt-1">{error}</p>
        )}

        {/* LISTA DE SUGESTÕES */}
        {suggestions.length > 0 && (
          <div className="mt-2 max-h-60 overflow-auto border border-gray-200 rounded-lg bg-white shadow-md divide-y">
            {suggestions.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(item)}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                {item.city}, {item.state ? item.state + ", " : ""}
                {item.country}
              </button>
            ))}
          </div>
        )}

        {/* COORDENADAS */}
        <div className="mt-4 text-sm text-gray-600">
          <p>
            {t("profile.location.latitude")}:{" "}
            <span className="font-medium">
              {form.latitude ?? t("profile.location.notSet")}
            </span>
          </p>
          <p>
            {t("profile.location.longitude")}:{" "}
            <span className="font-medium">
              {form.longitude ?? t("profile.location.notSet")}
            </span>
          </p>
        </div>
      </PreferenceBlock>
    </div>
  );
}
