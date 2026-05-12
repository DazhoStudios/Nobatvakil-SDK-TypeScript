import { z } from 'zod';

/**
 * Zod schema for the CheckUpRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const checkUpRequest = z.lazy(() => {
  return z.object({
    phoneNumber: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {CheckUpRequest} checkUpRequest
 * @property {string}
 */
export type CheckUpRequest = z.infer<typeof checkUpRequest>;

/**
 * Zod schema for mapping API responses to the CheckUpRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const checkUpRequestResponse = z.lazy(() => {
  return z
    .object({
      phone_number: z.string().optional().nullable(),
    })
    .transform((data) => ({
      phoneNumber: data['phone_number'],
    }));
});

/**
 * Zod schema for mapping the CheckUpRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const checkUpRequestRequest = z.lazy(() => {
  return z
    .object({
      phoneNumber: z.string().optional().nullable(),
    })
    .transform((data) => ({
      phone_number: data['phoneNumber'],
    }));
});
