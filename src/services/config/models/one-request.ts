import { z } from 'zod';

/**
 * Zod schema for the OneRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const oneRequest = z.lazy(() => {
  return z.object({
    name: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {OneRequest} oneRequest
 * @property {string}
 */
export type OneRequest = z.infer<typeof oneRequest>;

/**
 * Zod schema for mapping API responses to the OneRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const oneRequestResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the OneRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const oneRequestRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});
