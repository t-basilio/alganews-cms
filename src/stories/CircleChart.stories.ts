import type { Meta, StoryObj } from "@storybook/react";
import CircleChart from "../app/components/CircleChart";

const meta = {
  title: "Example/CircleChart",

  component: CircleChart,
  tags: ["autodocs"],
  argTypes: {
    progress: {
      control: {
        type: "range",
        min: 0,
        max: 100,
      },
    },
  },
} satisfies Meta<typeof CircleChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: "primary",
    progress: 10,
    size: 250,
    caption: "Mobile",
  },
};

export const Default: Story = {
  args: {
    progress: 0,
    size: 150,
    caption: "web",
  },
};
