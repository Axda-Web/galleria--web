import React from "react";
import type { Decorator } from "@storybook/react";
import { I18nProviderClient } from "../locales/client";
import { ThemeProvider } from "../providers/theme-provider";
import { libreBaskerville } from "../assets/fonts/libre-baskerville";
import { Header } from "@/components/header";
import { LocaleSelector } from "@/components/locale-selector";
import { ThemeToggle } from "@/components/theme-toggle";

export const withRootLayoutDecorator: Decorator = (Story) => (
  <html lang="en" suppressHydrationWarning>
    <body className={`${libreBaskerville.variable} antialiased`}>
      <I18nProviderClient locale="en">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Story />
          <LocaleSelector />
          <ThemeToggle />
        </ThemeProvider>
      </I18nProviderClient>
    </body>
  </html>
);

export const withProvidersDecorator: Decorator = (Story) => (
  <div className={`${libreBaskerville.className} antialiased`}>
    <I18nProviderClient locale="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Story />
      </ThemeProvider>
    </I18nProviderClient>
  </div>
);
