import type { Meta, StoryObj } from "@storybook/react";

import MarkdownEditor from "../app/components/MarkdownEditor";

const meta = {
  title: "Example/MarkdownEditor",

  component: MarkdownEditor,
  tags: ["autodocs"],
  //argTypes: {
  //backgroundColor: { control: 'color' },
  //},
} satisfies Meta<typeof MarkdownEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
