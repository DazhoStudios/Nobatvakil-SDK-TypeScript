import { z } from 'zod';

/**
 * Zod schema for the OfferRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const offerRequest = z.lazy(() => {
  return z.object({
    fromPeer: z.string().optional().nullable(),
    sdp: z.string().optional().nullable(),
  });
});

/**
 * @typedef {OfferRequest} offerRequest
 * @property {string} fromPeer
 * @property {string} sdp
 */
export type OfferRequest = z.infer<typeof offerRequest>;

/**
 * Zod schema for mapping API responses to the OfferRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const offerRequestResponse = z.lazy(() => {
  return z
    .object({
      from_peer: z.string().optional().nullable(),
      sdp: z.string().optional().nullable(),
    })
    .transform((data) => ({
      fromPeer: data['from_peer'],
      sdp: data['sdp'],
    }));
});

/**
 * Zod schema for mapping the OfferRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const offerRequestRequest = z.lazy(() => {
  return z
    .object({
      fromPeer: z.string().optional().nullable(),
      sdp: z.string().optional().nullable(),
    })
    .transform((data) => ({
      from_peer: data['fromPeer'],
      sdp: data['sdp'],
    }));
});
