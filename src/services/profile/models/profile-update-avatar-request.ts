import { z } from 'zod';

/**
 * Zod schema for the ProfileUpdateAvatarRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const profileUpdateAvatarRequest = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
    image: z.instanceof(ArrayBuffer).optional().nullable(),
  });
});

/**
 *
 * @typedef  {ProfileUpdateAvatarRequest} profileUpdateAvatarRequest
 * @property {string}
 * @property {ArrayBuffer}
 */
export type ProfileUpdateAvatarRequest = z.infer<typeof profileUpdateAvatarRequest>;

/**
 * Zod schema for mapping API responses to the ProfileUpdateAvatarRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const profileUpdateAvatarRequestResponse = z.lazy(() => {
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
 * Zod schema for mapping the ProfileUpdateAvatarRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const profileUpdateAvatarRequestRequest = z.lazy(() => {
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
