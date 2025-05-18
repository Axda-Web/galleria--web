import { generateSlugFromName } from "@/lib/generateSlugFromName";

export const NAV_LINKS = {
  HOME: "/",
  PAINTING: (name: string) => `/paintings/${generateSlugFromName(name)}`,
};
