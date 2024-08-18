import type { Meta, StoryObj } from "@storybook/react";
import NoData from "../app/components/NoData/NoData";

const meta = {
  title: "Example/NoData",

  component: NoData,
  tags: ["autodocs"],
  //argTypes: {
  //backgroundColor: { control: 'color' },
  //},
} satisfies Meta<typeof NoData>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FixedHeight: Story = {
  args: {
    height: 240,
  },
};
