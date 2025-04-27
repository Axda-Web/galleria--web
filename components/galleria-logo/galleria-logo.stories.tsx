import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import { GalleriaLogo } from "./galleria-logo";

const meta = {
  title: "Simple/GalleriaLogo",
  component: GalleriaLogo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const logo = await canvas.findByRole("link");
    expect(logo).toBeInTheDocument();
  },
} satisfies Meta<typeof GalleriaLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "",
    width: 114,
    height: 32,
  },
};

export const WithClassName: Story = {
  args: {
    className: "border-2 border-red-500",
    width: 114,
    height: 32,
  },
};
