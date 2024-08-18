import type { Meta, StoryObj } from "@storybook/react";
import WordPriceCounter from "../app/components/WordPriceCounter";

const meta = {
  title: "Example/WordPriceCounter",

  component: WordPriceCounter,
  tags: ["autodocs"],
  //argTypes: {
  //backgroundColor: { control: 'color' },
  //},
} satisfies Meta<typeof WordPriceCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pricePerWord: 0.25,
    wordsCount: 20
  },
};
