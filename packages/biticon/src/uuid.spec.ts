import { expect, describe, it } from 'vitest'

import { isValidUUID, } from './uuid'

describe('isValidUUID', () => {
  it('should return true for valid UUIDs', () => {
    const validUUIDs = [
      '123e4567-e89b-12d3-a456-426614174000',
      '550e8400-e29b-41d4-a716-446655440000',
      '00000000-0000-0000-0000-000000000000',
    ]
    for (const uuid of validUUIDs) {
      expect(isValidUUID(uuid)).toBe(true)
    }
  })

  it('should return false for invalid UUIDs', () => {
    const invalidUUIDs = [
      '123e4567-e89b-12d3-a456-42661417400', // too short
      '123e4567-e89b-12d3-a456-4266141740000', // too long
      '123e4567-e89b-12d3-a456-42661417400g', // invalid character
      '123e4567-e89b-12d3-a456-42661417400-', // trailing dash
    ]
    for (const uuid of invalidUUIDs) {
      expect(isValidUUID(uuid)).toBe(false)
    }
  })
})
