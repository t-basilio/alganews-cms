import type { Meta, StoryObj } from "@storybook/react";
import SessionController from "../app/components/SessionController";

const meta = {
  title: "Example/SessionController",

  component: SessionController,
  tags: ["autodocs"],
  //argTypes: {
  //backgroundColor: { control: 'color' },
  //},
} satisfies Meta<typeof SessionController>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Cristiano Moreira Silva",
    description: "editor há 2 anos",
  },
};
