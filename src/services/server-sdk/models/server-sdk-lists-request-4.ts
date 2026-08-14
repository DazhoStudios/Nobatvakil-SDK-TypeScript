import { z } from 'zod';

/**
 * Zod schema for the ServerSdkListsRequest4 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkListsRequest4 = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkListsRequest4} serverSdkListsRequest4
 * @property {string} id
 */
export type ServerSdkListsRequest4 = z.infer<typeof serverSdkListsRequest4>;

/**
 * Zod schema for mapping API responses to the ServerSdkListsRequest4 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkListsRequest4Response = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkListsRequest4 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkListsRequest4Request = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});
