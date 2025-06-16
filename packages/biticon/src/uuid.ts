export const isValidUUID = (uuid: string): boolean => {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(uuid)
}

export const uuidToBigInt = (uuid: string): bigint => {
  // strip if it has dashes
  const uuid_ = uuid.replace(/-/g, '')
  return BigInt(`0x${uuid_}`)
}
