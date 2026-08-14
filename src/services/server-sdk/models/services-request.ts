import { z } from 'zod';

/**
 * Zod schema for the ServicesRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const servicesRequest = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServicesRequest} servicesRequest
 * @property {string} id
 */
export type ServicesRequest = z.infer<typeof servicesRequest>;

/**
 * Zod schema for mapping API responses to the ServicesRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const servicesRequestResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the ServicesRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const servicesRequestRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});
