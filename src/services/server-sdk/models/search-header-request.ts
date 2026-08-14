import { z } from 'zod';

/**
 * Zod schema for the SearchHeaderRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchHeaderRequest = z.lazy(() => {
  return z.object({
    name: z.string().optional().nullable(),
  });
});

/**
 * @typedef {SearchHeaderRequest} searchHeaderRequest
 * @property {string} name
 */
export type SearchHeaderRequest = z.infer<typeof searchHeaderRequest>;

/**
 * Zod schema for mapping API responses to the SearchHeaderRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchHeaderRequestResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the SearchHeaderRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchHeaderRequestRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});
