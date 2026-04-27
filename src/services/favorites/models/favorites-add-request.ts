import { z } from 'zod';

/**
 * Zod schema for the FavoritesAddRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const favoritesAddRequest = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {FavoritesAddRequest} favoritesAddRequest
 * @property {string}
 */
export type FavoritesAddRequest = z.infer<typeof favoritesAddRequest>;

/**
 * Zod schema for mapping API responses to the FavoritesAddRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const favoritesAddRequestResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the FavoritesAddRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const favoritesAddRequestRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});
