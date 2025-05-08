import localFont from "next/font/local";

export const libreBaskerville = localFont({
  src: [
    {
      path: "./LibreBaskerville-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./LibreBaskerville-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./LibreBaskerville-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-libre-baskerville",
});
