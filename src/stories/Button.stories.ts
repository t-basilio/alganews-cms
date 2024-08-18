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
    variant: "primary",
    label: "resetar senha"
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    label: "resetar senha",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    label: "resetar senha",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    disabled: true,
    label: "resetar senha",
  },
};
