import { z } from 'zod';

/**
 * Zod schema for the ServerSdkRemoveRequest2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkRemoveRequest2 = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkRemoveRequest2} serverSdkRemoveRequest2
 * @property {string} id
 */
export type ServerSdkRemoveRequest2 = z.infer<typeof serverSdkRemoveRequest2>;

/**
 * Zod schema for mapping API responses to the ServerSdkRemoveRequest2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkRemoveRequest2Response = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkRemoveRequest2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkRemoveRequest2Request = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});
