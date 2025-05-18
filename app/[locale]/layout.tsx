import type { Metadata } from "next";
import "../globals.css";
import { Header } from "@/components/header";
import { I18nProviderClient } from "@/locales/client";
import { ThemeProvider } from "@/providers/theme-provider";
import { LocaleSelector } from "@/components/locale-selector";
import { ThemeToggle } from "@/components/theme-toggle";
import { libreBaskerville } from "@/public/assets/fonts/libre-baskerville";

export const metadata: Metadata = {
  title: "Galleria",
  description:
    "Discover the world’s most famous paintings and masterpieces, curated in an inspiring online gallery.",
};

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}>) {
  const { locale } = await params;
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${libreBaskerville.variable} antialiased`}>
        <I18nProviderClient locale={locale}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="max-w-[1360px] mx-auto">
              <Header />
              {children}
            </div>
            <LocaleSelector />
            <ThemeToggle />
          </ThemeProvider>
        </I18nProviderClient>
      </body>
    </html>
  );
}
