import type { Meta, StoryObj } from "@storybook/react";
import ImageUpload from "../app/components/ImageUpload";

const meta = {
  title: "Example/ImageUpload",

  component: ImageUpload,
  tags: ["autodocs"],
} satisfies Meta<typeof ImageUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Thumbnail do post",
  },
};
