import type { Meta, StoryObj } from "@storybook/react";

import ValueDescriptor from "../app/components/ValueDescriptor/ValueDescriptor";

const meta = {
  title: "Example/ValueDescriptor",

  component: ValueDescriptor,
  tags: ["autodocs"],
  //argTypes: {
  //backgroundColor: { control: 'color' },
  //},
} satisfies Meta<typeof ValueDescriptor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: "Ganhos na semana",
    value: 560322.02,
  },
};

export const Primary: Story = {
  args: {
    description: "Ganhos na semana",
    color: "primary",
    value: 560322.02,
    isCurrency: false,
  },
};

export const DefaultCurrency: Story = {
  args: {
    description: "Ganhos na semana",
    color: "default",
    value: 560322.02,
    isCurrency: true,
  },
};

export const PrimaryCurrency: Story = {
  args: {
    description: "Ganhos na semana",
    color: "primary",
    value: 560322.02,
    isCurrency: true,
  },
};
