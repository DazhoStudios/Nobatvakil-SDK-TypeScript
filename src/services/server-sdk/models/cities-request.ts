import { z } from 'zod';

/**
 * Zod schema for the CitiesRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const citiesRequest = z.lazy(() => {
  return z.object({
    stateId: z.string().optional().nullable(),
  });
});

/**
 * @typedef {CitiesRequest} citiesRequest
 * @property {string} stateId
 */
export type CitiesRequest = z.infer<typeof citiesRequest>;

/**
 * Zod schema for mapping API responses to the CitiesRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const citiesRequestResponse = z.lazy(() => {
  return z
    .object({
      state_id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      stateId: data['state_id'],
    }));
});

/**
 * Zod schema for mapping the CitiesRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const citiesRequestRequest = z.lazy(() => {
  return z
    .object({
      stateId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      state_id: data['stateId'],
    }));
});
