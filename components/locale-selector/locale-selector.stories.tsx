import type { Meta, StoryObj } from "@storybook/react";
// import { expect, within } from "@storybook/test";
import { withProvidersDecorator } from "../../.storybook/decorators";
import { LocaleSelector } from "./locale-selector";

const meta = {
  title: "Composite/LocaleSelector",
  component: LocaleSelector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);
  // },
  decorators: [withProvidersDecorator],
} satisfies Meta<typeof LocaleSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
