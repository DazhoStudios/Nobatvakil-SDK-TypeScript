import { z } from 'zod';

/**
 * Zod schema for the ServerSdkInfoRequest5 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkInfoRequest5 = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkInfoRequest5} serverSdkInfoRequest5
 * @property {string} id
 */
export type ServerSdkInfoRequest5 = z.infer<typeof serverSdkInfoRequest5>;

/**
 * Zod schema for mapping API responses to the ServerSdkInfoRequest5 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkInfoRequest5Response = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkInfoRequest5 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkInfoRequest5Request = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});
