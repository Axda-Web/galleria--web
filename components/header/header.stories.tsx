import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { withProvidersDecorator } from "../../.storybook/decorators";

import { Header } from "./header";

const meta = {
  title: "Composite/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const logo = await canvas.findByRole("link", { name: "galleria logo" });
    expect(logo).toBeInTheDocument();

    const startSlideshowBtn = await canvas.findByRole("button", {
      name: "start slideshow",
    });
    expect(startSlideshowBtn).toBeInTheDocument();
  },
  decorators: [withProvidersDecorator],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "",
    width: 114,
    height: 32,
  },
};
