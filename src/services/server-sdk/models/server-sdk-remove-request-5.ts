import { z } from 'zod';

/**
 * Zod schema for the ServerSdkRemoveRequest5 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkRemoveRequest5 = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
    categoryId: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkRemoveRequest5} serverSdkRemoveRequest5
 * @property {string} id
 * @property {string} categoryId
 */
export type ServerSdkRemoveRequest5 = z.infer<typeof serverSdkRemoveRequest5>;

/**
 * Zod schema for mapping API responses to the ServerSdkRemoveRequest5 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkRemoveRequest5Response = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      category_id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      categoryId: data['category_id'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkRemoveRequest5 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkRemoveRequest5Request = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      categoryId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      category_id: data['categoryId'],
    }));
});
