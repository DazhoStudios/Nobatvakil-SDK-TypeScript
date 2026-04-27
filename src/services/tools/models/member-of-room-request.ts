import { z } from 'zod';

/**
 * Zod schema for the MemberOfRoomRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const memberOfRoomRequest = z.lazy(() => {
  return z.object({
    peerId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {MemberOfRoomRequest} memberOfRoomRequest
 * @property {string}
 */
export type MemberOfRoomRequest = z.infer<typeof memberOfRoomRequest>;

/**
 * Zod schema for mapping API responses to the MemberOfRoomRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const memberOfRoomRequestResponse = z.lazy(() => {
  return z
    .object({
      peer_id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      peerId: data['peer_id'],
    }));
});

/**
 * Zod schema for mapping the MemberOfRoomRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const memberOfRoomRequestRequest = z.lazy(() => {
  return z
    .object({
      peerId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      peer_id: data['peerId'],
    }));
});
