import type { Story, StoryDefault } from "@ladle/react";
import { DetailedBitString } from "./Detailed";
export const Button: Story = () => <button type="button">My Button</button>;
export const HeaderOne: Story = () => <h1>Header</h1>;

export default {
  title: "react-binary",
} satisfies StoryDefault;

export const DetailedBitStringExample: Story = () => (
  <DetailedBitString value={0b10101010} length={8} />
)
