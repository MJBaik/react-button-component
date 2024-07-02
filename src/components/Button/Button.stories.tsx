import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    color: "primary",
    children: "button"
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    children: "button"
  },
};

export const withOnClick: Story = {
  args: {
    color: "primary",
    children: "button",
    onClick: () => alert("clicked!!")
  },
};

