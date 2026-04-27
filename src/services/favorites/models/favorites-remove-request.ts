import { z } from 'zod';

/**
 * Zod schema for the FavoritesRemoveRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const favoritesRemoveRequest = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {FavoritesRemoveRequest} favoritesRemoveRequest
 * @property {string}
 */
export type FavoritesRemoveRequest = z.infer<typeof favoritesRemoveRequest>;

/**
 * Zod schema for mapping API responses to the FavoritesRemoveRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const favoritesRemoveRequestResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the FavoritesRemoveRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const favoritesRemoveRequestRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});
