import type { Meta, StoryObj } from "@storybook/react";
import { withRootLayoutDecorator } from "../../.storybook/decorators";
// import { expect, within } from "@storybook/test";

import HomePage from "./page";

const meta = {
  title: "SCREENS/HomePage",
  component: HomePage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  //   play: async ({ canvasElement }) => {
  //     const canvas = within(canvasElement);
  //   },
  decorators: [withRootLayoutDecorator],
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

// TODO: add data + loading state
