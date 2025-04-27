import type { Preview } from "@storybook/react";
import { withRootLayoutDecorator } from "./decorators";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withRootLayoutDecorator],
};

export default preview;
