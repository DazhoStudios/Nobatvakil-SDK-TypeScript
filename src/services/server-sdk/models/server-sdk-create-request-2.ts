import { z } from 'zod';

/**
 * Zod schema for the ServerSdkCreateRequest2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkCreateRequest2 = z.lazy(() => {
  return z.object({
    title: z.string().optional().nullable(),
    image: z.instanceof(ArrayBuffer).optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkCreateRequest2} serverSdkCreateRequest2
 * @property {string} title
 * @property {ArrayBuffer} image
 */
export type ServerSdkCreateRequest2 = z.infer<typeof serverSdkCreateRequest2>;

/**
 * Zod schema for mapping API responses to the ServerSdkCreateRequest2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkCreateRequest2Response = z.lazy(() => {
  return z
    .object({
      title: z.string().optional().nullable(),
      image: z.instanceof(ArrayBuffer).optional().nullable(),
    })
    .transform((data) => ({
      title: data['title'],
      image: data['image'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkCreateRequest2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkCreateRequest2Request = z.lazy(() => {
  return z
    .object({
      title: z.string().optional().nullable(),
      image: z.instanceof(ArrayBuffer).optional().nullable(),
    })
    .transform((data) => ({
      title: data['title'],
      image: data['image'],
    }));
});
