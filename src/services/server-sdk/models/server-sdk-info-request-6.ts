import { z } from 'zod';

/**
 * Zod schema for the ServerSdkInfoRequest6 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkInfoRequest6 = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkInfoRequest6} serverSdkInfoRequest6
 * @property {string} id
 */
export type ServerSdkInfoRequest6 = z.infer<typeof serverSdkInfoRequest6>;

/**
 * Zod schema for mapping API responses to the ServerSdkInfoRequest6 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkInfoRequest6Response = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkInfoRequest6 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkInfoRequest6Request = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});
