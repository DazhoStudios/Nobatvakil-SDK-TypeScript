import { z } from 'zod';

/**
 * Zod schema for the TicketsSendMessageRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const ticketsSendMessageRequest = z.lazy(() => {
  return z.object({
    message: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {TicketsSendMessageRequest} ticketsSendMessageRequest
 * @property {string}
 */
export type TicketsSendMessageRequest = z.infer<typeof ticketsSendMessageRequest>;

/**
 * Zod schema for mapping API responses to the TicketsSendMessageRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const ticketsSendMessageRequestResponse = z.lazy(() => {
  return z
    .object({
      message: z.string().optional().nullable(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

/**
 * Zod schema for mapping the TicketsSendMessageRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const ticketsSendMessageRequestRequest = z.lazy(() => {
  return z
    .object({
      message: z.string().optional().nullable(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});
