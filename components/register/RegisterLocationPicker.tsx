"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Input } from "@/components/ui/input";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Loader2 } from "lucide-react";

const GEOAPIFY_KEY = process.env.NEXT_PUBLIC_GEOAPIFY_KEY;

type Props = {
  form: any;
  onChange: (field: string, value: string) => void;
};

export default function RegisterLocationPicker({ form, onChange }: Props) {
  const { t } = useTranslation();

  const [query, setQuery] = useState(form.city || "");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false); // popover

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query.length >= 3) fetchSuggestions(query);
      else setSuggestions([]);
    }, 400);
    return () => clearTimeout(timeout);
  }, [query]);

  async function fetchSuggestions(text: string) {
    try {
      setLoading(true);

      const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
        text
      )}&limit=5&apiKey=${GEOAPIFY_KEY}`;

      const res = await fetch(url);
      const data = await res.json();

      if (!data.features) return setSuggestions([]);

      const results = data.features.map((f: any) => ({
        city: f.properties.city || f.properties.name,
        state: f.properties.state,
        country: f.properties.country,
      }));

      setSuggestions(results);
      setOpen(true);
    } catch (e) {
      console.log("Geoapify error:", e);
    } finally {
      setLoading(false);
    }
  }

  function handleSelect(item: any) {
    setQuery(item.city);
    setSuggestions([]);
    setOpen(false);

    onChange("city", item.city);
    onChange("state", item.state);
    onChange("country", item.country);
  }

  return (
    <div className="w-full space-y-2">
      {/* INPUT */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="relative">
            <Input
              placeholder={t("profile.location.placeholder")}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full"
            />

            {loading && (
              <Loader2 className="absolute right-3 top-3 h-5 w-5 animate-spin text-muted-foreground" />
            )}
          </div>
        </PopoverTrigger>

        {suggestions.length > 0 && (
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandList>
                <CommandGroup>
                  {suggestions.map((item, index) => (
                    <CommandItem
                      key={index}
                      onSelect={() => handleSelect(item)}
                      className="cursor-pointer"
                    >
                      {item.city} — {item.state ? item.state + ", " : ""}
                      {item.country}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        )}
      </Popover>
    </div>
  );
}
