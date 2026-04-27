import { z } from 'zod';

/**
 * Zod schema for the TicketsCreateRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const ticketsCreateRequest = z.lazy(() => {
  return z.object({
    subject: z.string().optional().nullable(),
    message: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {TicketsCreateRequest} ticketsCreateRequest
 * @property {string}
 * @property {string}
 */
export type TicketsCreateRequest = z.infer<typeof ticketsCreateRequest>;

/**
 * Zod schema for mapping API responses to the TicketsCreateRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const ticketsCreateRequestResponse = z.lazy(() => {
  return z
    .object({
      subject: z.string().optional().nullable(),
      message: z.string().optional().nullable(),
    })
    .transform((data) => ({
      subject: data['subject'],
      message: data['message'],
    }));
});

/**
 * Zod schema for mapping the TicketsCreateRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const ticketsCreateRequestRequest = z.lazy(() => {
  return z
    .object({
      subject: z.string().optional().nullable(),
      message: z.string().optional().nullable(),
    })
    .transform((data) => ({
      subject: data['subject'],
      message: data['message'],
    }));
});
