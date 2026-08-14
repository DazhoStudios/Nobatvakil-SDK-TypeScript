import { z } from 'zod';

/**
 * Zod schema for the ServerSdkListsRequest1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkListsRequest1 = z.lazy(() => {
  return z.object({
    page: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkListsRequest1} serverSdkListsRequest1
 * @property {string} page
 */
export type ServerSdkListsRequest1 = z.infer<typeof serverSdkListsRequest1>;

/**
 * Zod schema for mapping API responses to the ServerSdkListsRequest1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkListsRequest1Response = z.lazy(() => {
  return z
    .object({
      page: z.string().optional().nullable(),
    })
    .transform((data) => ({
      page: data['page'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkListsRequest1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkListsRequest1Request = z.lazy(() => {
  return z
    .object({
      page: z.string().optional().nullable(),
    })
    .transform((data) => ({
      page: data['page'],
    }));
});
