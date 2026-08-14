import { z } from 'zod';

/**
 * Zod schema for the ServerSdkAddRequest2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkAddRequest2 = z.lazy(() => {
  return z.object({
    amount: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkAddRequest2} serverSdkAddRequest2
 * @property {string} amount
 */
export type ServerSdkAddRequest2 = z.infer<typeof serverSdkAddRequest2>;

/**
 * Zod schema for mapping API responses to the ServerSdkAddRequest2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkAddRequest2Response = z.lazy(() => {
  return z
    .object({
      amount: z.string().optional().nullable(),
    })
    .transform((data) => ({
      amount: data['amount'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkAddRequest2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkAddRequest2Request = z.lazy(() => {
  return z
    .object({
      amount: z.string().optional().nullable(),
    })
    .transform((data) => ({
      amount: data['amount'],
    }));
});
