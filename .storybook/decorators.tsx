import React from "react";
import type { Decorator } from "@storybook/react";
import { I18nProviderClient } from "../locales/client";
import { ThemeProvider } from "../providers/theme-provider";
import { libreBaskerville } from "../assets/fonts/libre-baskerville";

export const withRootLayoutDecorator: Decorator = (Story) => (
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
