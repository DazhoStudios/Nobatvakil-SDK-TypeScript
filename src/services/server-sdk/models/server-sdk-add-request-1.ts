import { z } from 'zod';

/**
 * Zod schema for the ServerSdkAddRequest1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkAddRequest1 = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkAddRequest1} serverSdkAddRequest1
 * @property {string} id
 */
export type ServerSdkAddRequest1 = z.infer<typeof serverSdkAddRequest1>;

/**
 * Zod schema for mapping API responses to the ServerSdkAddRequest1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkAddRequest1Response = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkAddRequest1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkAddRequest1Request = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});
