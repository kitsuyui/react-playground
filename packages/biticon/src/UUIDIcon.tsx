import { isValidUUID, uuidToBigInt } from "./uuid"
import { BitIcon, type BitIconProps } from "./BitIcon"
import { applySBox128bitBigintTo128bitBigint } from './bitShuffle'

import type React from "react"

export type UUIDIconProps = Omit<BitIconProps, 'bits'> & {
  uuid: string
}

export const UUIDIcon = (props: UUIDIconProps): React.JSX.Element => {
  const { uuid, ...iconProps } = props
  if (!isValidUUID(uuid)) {
    return <span>Invalid UUID</span>
  }
  const bits = uuidToBigInt(uuid)
  const newBits = applySBox128bitBigintTo128bitBigint(bits)
  return <BitIcon bits={newBits} {...iconProps} />
}
