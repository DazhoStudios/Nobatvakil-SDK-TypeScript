import { z } from 'zod';

/**
 * Zod schema for the ServerSdkUpdateAvatarRequest2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkUpdateAvatarRequest2 = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
    image: z.instanceof(ArrayBuffer).optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkUpdateAvatarRequest2} serverSdkUpdateAvatarRequest2
 * @property {string} id
 * @property {ArrayBuffer} image
 */
export type ServerSdkUpdateAvatarRequest2 = z.infer<typeof serverSdkUpdateAvatarRequest2>;

/**
 * Zod schema for mapping API responses to the ServerSdkUpdateAvatarRequest2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkUpdateAvatarRequest2Response = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      image: z.instanceof(ArrayBuffer).optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      image: data['image'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkUpdateAvatarRequest2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkUpdateAvatarRequest2Request = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      image: z.instanceof(ArrayBuffer).optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      image: data['image'],
    }));
});
