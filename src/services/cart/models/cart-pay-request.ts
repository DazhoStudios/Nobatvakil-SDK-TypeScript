import { z } from 'zod';

/**
 * Zod schema for the CartPayRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const cartPayRequest = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
    payMode: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {CartPayRequest} cartPayRequest
 * @property {string}
 * @property {string}
 */
export type CartPayRequest = z.infer<typeof cartPayRequest>;

/**
 * Zod schema for mapping API responses to the CartPayRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const cartPayRequestResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      pay_mode: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      payMode: data['pay_mode'],
    }));
});

/**
 * Zod schema for mapping the CartPayRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const cartPayRequestRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      payMode: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      pay_mode: data['payMode'],
    }));
});
