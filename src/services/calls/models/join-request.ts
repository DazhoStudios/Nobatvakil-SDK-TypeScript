import { z } from 'zod';

/**
 * Zod schema for the JoinRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const joinRequest = z.lazy(() => {
  return z.object({
    userName: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {JoinRequest} joinRequest
 * @property {string}
 */
export type JoinRequest = z.infer<typeof joinRequest>;

/**
 * Zod schema for mapping API responses to the JoinRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const joinRequestResponse = z.lazy(() => {
  return z
    .object({
      user_name: z.string().optional().nullable(),
    })
    .transform((data) => ({
      userName: data['user_name'],
    }));
});

/**
 * Zod schema for mapping the JoinRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const joinRequestRequest = z.lazy(() => {
  return z
    .object({
      userName: z.string().optional().nullable(),
    })
    .transform((data) => ({
      user_name: data['userName'],
    }));
});
