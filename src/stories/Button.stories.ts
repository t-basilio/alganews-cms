import type { Meta, StoryObj } from "@storybook/react";

import Button from "../app/components/Button/Button";

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  //argTypes: {
  //backgroundColor: { control: "color" },
  //},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    option: "primary",
    label: "resetar senha",
  },
};

export const Danger: Story = {
  args: {
    option: "danger",
    label: "resetar senha",
  },
};

export const Text: Story = {
  args: {
    option: "danger",
    label: "resetar senha",
  },
};

export const Disabled: Story = {
  args: {
    option: "primary",
    disabled: true,
    label: "resetar senha",
  },
};
