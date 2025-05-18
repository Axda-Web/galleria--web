import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import { PaintingCard } from "./painting-card";

const meta = {
  title: "Simple/PaintingCard",
  component: PaintingCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    painting: { control: "object" },
    index: { control: "number" },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const paintingCard = await canvas.findByTestId("painting-card");
    expect(paintingCard).toBeInTheDocument();

    const image = await canvas.findByRole("img", { name: "Starry Night" });
    expect(image).toBeInTheDocument();

    const name = await canvas.findByText("Starry Night");
    expect(name).toBeInTheDocument();
  },
} satisfies Meta<typeof PaintingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    painting: {
      name: "Starry Night",
      id: 1,
      artist: "Vincent van Gogh",
      description: "A painting of a starry night",
      year: 1889,
      sourceUrl: "https://en.wikipedia.org/wiki/The_Starry_Night",
      createdAt: new Date(),
      updatedAt: new Date(),
      images: [
        {
          id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          paintingId: 1,
          type: "thumbnail",
          url: "/assets/starry-night/thumbnail.jpg",
        },
      ],
    },
    index: 0,
  },
};
