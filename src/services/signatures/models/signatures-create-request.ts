import { z } from 'zod';

/**
 * Zod schema for the SignaturesCreateRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const signaturesCreateRequest = z.lazy(() => {
  return z.object({
    title: z.string().optional().nullable(),
    image: z.instanceof(ArrayBuffer).optional().nullable(),
  });
});

/**
 *
 * @typedef  {SignaturesCreateRequest} signaturesCreateRequest
 * @property {string}
 * @property {ArrayBuffer}
 */
export type SignaturesCreateRequest = z.infer<typeof signaturesCreateRequest>;

/**
 * Zod schema for mapping API responses to the SignaturesCreateRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const signaturesCreateRequestResponse = z.lazy(() => {
  return z
    .object({
      title: z.string().optional().nullable(),
      image: z.instanceof(ArrayBuffer).optional().nullable(),
    })
    .transform((data) => ({
      title: data['title'],
      image: data['image'],
    }));
});

/**
 * Zod schema for mapping the SignaturesCreateRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const signaturesCreateRequestRequest = z.lazy(() => {
  return z
    .object({
      title: z.string().optional().nullable(),
      image: z.instanceof(ArrayBuffer).optional().nullable(),
    })
    .transform((data) => ({
      title: data['title'],
      image: data['image'],
    }));
});
