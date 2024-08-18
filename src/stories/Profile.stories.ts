import type { Meta, StoryObj } from "@storybook/react";
import Profile from "../app/components/Profile";

const meta = {
  title: "Example/Profile",

  component: Profile,
  tags: ["autodocs"],
  //argTypes: {
  //backgroundColor: { control: 'color' },
  //},
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    editorId: 1,
    name: "Felipe Hasch",
    description: "criador de conteúdo há 3 anos",
  },
};
