import { z } from 'zod';

/**
 * Zod schema for the ServerSdkPayRequest2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkPayRequest2 = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
    payMode: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkPayRequest2} serverSdkPayRequest2
 * @property {string} id
 * @property {string} payMode
 */
export type ServerSdkPayRequest2 = z.infer<typeof serverSdkPayRequest2>;

/**
 * Zod schema for mapping API responses to the ServerSdkPayRequest2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkPayRequest2Response = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      pay_mode: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      payMode: data['pay_mode'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkPayRequest2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkPayRequest2Request = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      payMode: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      pay_mode: data['payMode'],
    }));
});
