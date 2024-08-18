import type { Meta, StoryObj } from "@storybook/react";

import ErrorDisplay from "../app/components/ErrorDisplay";

const meta = {
  title: "Example/ErrorDisplay",

  component: ErrorDisplay,
  tags: ["autodocs"],
  //argTypes: {
  //backgroundColor: { control: 'color' },
  //},
} satisfies Meta<typeof ErrorDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
   
  },
};

export const CustomTitle: Story = {
  args: {
    title: "Erro ao compilar codigo"
  },
};

export const CustomMessage: Story = {
    args: {
      message: "Erro no componete xpto"
  },
};

export const Small: Story = {
    args: {
      small: true
  },
};

