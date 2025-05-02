import type { Meta, StoryObj } from "@storybook/react";
// import { expect, within } from "@storybook/test";
import { withProvidersDecorator } from "../../.storybook/decorators";
import { ThemeToggle } from "./theme-toggle";

const meta = {
  title: "Composite/ThemeToggle",
  component: ThemeToggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);
  // },
  decorators: [withProvidersDecorator],
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
