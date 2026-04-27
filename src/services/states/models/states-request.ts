import { z } from 'zod';

/**
 * Zod schema for the StatesRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const statesRequest = z.lazy(() => {
  return z.object({
    countryId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {StatesRequest} statesRequest
 * @property {string}
 */
export type StatesRequest = z.infer<typeof statesRequest>;

/**
 * Zod schema for mapping API responses to the StatesRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const statesRequestResponse = z.lazy(() => {
  return z
    .object({
      country_id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      countryId: data['country_id'],
    }));
});

/**
 * Zod schema for mapping the StatesRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const statesRequestRequest = z.lazy(() => {
  return z
    .object({
      countryId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      country_id: data['countryId'],
    }));
});
