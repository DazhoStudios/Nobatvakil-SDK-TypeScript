import { z } from 'zod';

/**
 * Zod schema for the ServerSdkListsRequest2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkListsRequest2 = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkListsRequest2} serverSdkListsRequest2
 * @property {string} id
 */
export type ServerSdkListsRequest2 = z.infer<typeof serverSdkListsRequest2>;

/**
 * Zod schema for mapping API responses to the ServerSdkListsRequest2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkListsRequest2Response = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkListsRequest2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkListsRequest2Request = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});
