import type { Meta, StoryObj } from "@storybook/react";
import FieldDescriptor from "../app/components/FieldDescriptor/FieldDescriptor";

const meta = {
  title: "Example/FieldDescriptor",

  component: FieldDescriptor,
  tags: ["autodocs"],
  //argTypes: {
  //backgroundColor: { control: 'color' },
  //},
} satisfies Meta<typeof FieldDescriptor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    field: "data de nascimento",
    value: "26 de Dezembro de 1997 (22 anos)",
  },
};
