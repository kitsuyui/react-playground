import { isValidUUID, uuidToBigInt } from "./uuid"
import { BitIcon } from "./BitIcon"
import { applySBox128bitBigintTo128bitBigint } from './bitShuffle'

import type React from "react"

export const UUIDIcon = (props: { uuid: string }): React.JSX.Element => {
  const uuid = props.uuid
  if (!isValidUUID(uuid)) {
    return <span>Invalid UUID</span>
  }
  const bits = uuidToBigInt(uuid)
  const newBits = applySBox128bitBigintTo128bitBigint(bits)
  return <BitIcon bits={newBits} />
}
