import type { Meta, StoryObj } from "@storybook/react";
import Confirm from "../app/components/Confirm/Confirm";

const meta = {
  title: "Example/Confirm",

  component: Confirm,
  tags: ["autodocs"],
  argTypes: {
    onConfirm: { action: "confirm" },
    onCancel: { action: "cancel" },
  },
} satisfies Meta<typeof Confirm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Deseja realmente sair?",
  },
};
