"use client";

import {
  useCurrentLocale,
  useChangeLocale,
  useScopedI18n,
} from "@/locales/client";
import {
  Select,
  //   SelectContent,
  //   SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import translation from "@/locales/en";

export function LocaleSelector() {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  const t = useScopedI18n("page.home.locale.selector");
  return (
    <Select value={locale} onValueChange={changeLocale}>
      <SelectTrigger>
        <SelectValue placeholder={t("label")} />
      </SelectTrigger>
      {/* <SelectContent>
        {Object.entries(translation.page.home.locale.selector.options).map(
          ([key, value]) => (
            <SelectItem key={key} value={key}>
              {value}
            </SelectItem>
          )
        )}
      </SelectContent> */}
    </Select>
  );
}
