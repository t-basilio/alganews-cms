import type { Meta, StoryObj } from "@storybook/react";
import ProgressBar from "../app/components/ProgressBar/ProgressBar";

const meta = {
  title: "Example/ProgressBar",

  component: ProgressBar,
  tags: ["autodocs"],
  //argTypes: {
  //backgroundColor: { control: 'color' },
  //},
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: "primary",
    skill: "C#",
    level: 50,
    width: 375,
  },
};

export const Secondary: Story = {
  args: {
    theme: "secondary",
    skill: "C++",
    level: 50,
    width: 375,
  },
};

export const Complete: Story = {
  args: {
    theme: "primary",
    skill: "Java",
    level: 100,
    width: 375,
  },
};

export const ZeroProgress: Story = {
  args: {
    theme: "secondary",
    skill: "Python",
    level: 0,
    width: 375,
  },
};

export const ProgressInHalfOfText: Story = {
  args: {
    theme: "primary",
    skill: "JavaScript",
    level: 10,
    width: 375,
  },
};
