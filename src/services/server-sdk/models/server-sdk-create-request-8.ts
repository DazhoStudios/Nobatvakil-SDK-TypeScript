import { z } from 'zod';

/**
 * Zod schema for the ServerSdkCreateRequest8 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkCreateRequest8 = z.lazy(() => {
  return z.object({
    lawyerId: z.string().optional().nullable(),
    title: z.string().optional().nullable(),
    image: z.instanceof(ArrayBuffer).optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkCreateRequest8} serverSdkCreateRequest8
 * @property {string} lawyerId
 * @property {string} title
 * @property {ArrayBuffer} image
 */
export type ServerSdkCreateRequest8 = z.infer<typeof serverSdkCreateRequest8>;

/**
 * Zod schema for mapping API responses to the ServerSdkCreateRequest8 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkCreateRequest8Response = z.lazy(() => {
  return z
    .object({
      lawyer_id: z.string().optional().nullable(),
      title: z.string().optional().nullable(),
      image: z.instanceof(ArrayBuffer).optional().nullable(),
    })
    .transform((data) => ({
      lawyerId: data['lawyer_id'],
      title: data['title'],
      image: data['image'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkCreateRequest8 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkCreateRequest8Request = z.lazy(() => {
  return z
    .object({
      lawyerId: z.string().optional().nullable(),
      title: z.string().optional().nullable(),
      image: z.instanceof(ArrayBuffer).optional().nullable(),
    })
    .transform((data) => ({
      lawyer_id: data['lawyerId'],
      title: data['title'],
      image: data['image'],
    }));
});
