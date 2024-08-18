import type { Meta, StoryObj } from "@storybook/react";

import Input from "../app/components/Input/Input";

const meta = {
  title: "Example/Input",

  component: Input,
  tags: ["autodocs"],
  //argTypes: {
  //backgroundColor: { control: 'color' },
  //},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithPlaceholder: Story = {
  args: {
    placeholder: "e.g.: Jon Doe",
  },
};

export const WithLabelAndPlaceholder: Story = {
  args: {
    label: "Name",
    placeholder: "e.g.: Jon Doe",
  },
};

export const WithLabelAndContent: Story = {
  args: {
    label: "Name",
    placeholder: "e.g.: Jon Doe",
    value: "Jon Doe",
  },
};

export const WithContent: Story = {
  args: {
    value: "Jon Doe",
  },
};
