"use client";

import {
  useCurrentLocale,
  useChangeLocale,
  useScopedI18n,
} from "@/locales/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LOCALES } from "@/locales/constants";

export function LocaleSelector() {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  const t = useScopedI18n("page.home.locale.selector");

  return (
    <div className="fixed bottom-4 right-4">
      <Select value={locale} onValueChange={changeLocale}>
        <SelectTrigger>
          <SelectValue placeholder={t("label")} />
        </SelectTrigger>
        <SelectContent>
          {LOCALES.map((locale) => (
            <SelectItem key={locale} value={locale}>
              {t(`options.${locale}`)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
