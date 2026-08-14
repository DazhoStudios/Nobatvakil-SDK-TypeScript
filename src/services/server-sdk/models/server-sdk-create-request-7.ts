import { z } from 'zod';

/**
 * Zod schema for the ServerSdkCreateRequest7 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkCreateRequest7 = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
    categoryId: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkCreateRequest7} serverSdkCreateRequest7
 * @property {string} id
 * @property {string} categoryId
 */
export type ServerSdkCreateRequest7 = z.infer<typeof serverSdkCreateRequest7>;

/**
 * Zod schema for mapping API responses to the ServerSdkCreateRequest7 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkCreateRequest7Response = z.lazy(() => {
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
 * Zod schema for mapping the ServerSdkCreateRequest7 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkCreateRequest7Request = z.lazy(() => {
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
