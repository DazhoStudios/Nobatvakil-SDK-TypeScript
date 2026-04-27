import { z } from 'zod';

/**
 * Zod schema for the LawyerProfileUpdateAvatarRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const lawyerProfileUpdateAvatarRequest = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
    image: z.instanceof(ArrayBuffer).optional().nullable(),
  });
});

/**
 *
 * @typedef  {LawyerProfileUpdateAvatarRequest} lawyerProfileUpdateAvatarRequest
 * @property {string}
 * @property {ArrayBuffer}
 */
export type LawyerProfileUpdateAvatarRequest = z.infer<typeof lawyerProfileUpdateAvatarRequest>;

/**
 * Zod schema for mapping API responses to the LawyerProfileUpdateAvatarRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const lawyerProfileUpdateAvatarRequestResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      image: z.instanceof(ArrayBuffer).optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      image: data['image'],
    }));
});

/**
 * Zod schema for mapping the LawyerProfileUpdateAvatarRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const lawyerProfileUpdateAvatarRequestRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      image: z.instanceof(ArrayBuffer).optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      image: data['image'],
    }));
});
