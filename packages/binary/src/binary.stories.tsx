import type { Story } from "@ladle/react";
import { DetailedBitString } from "./Detailed";

export const DetailedBitStringExample: Story = () => (
  <DetailedBitString value={0b10101010} length={8} />
)
