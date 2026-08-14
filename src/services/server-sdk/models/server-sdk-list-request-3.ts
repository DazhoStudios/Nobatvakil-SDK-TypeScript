import { z } from 'zod';

/**
 * Zod schema for the ServerSdkListRequest3 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkListRequest3 = z.lazy(() => {
  return z.object({
    lawyerId: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkListRequest3} serverSdkListRequest3
 * @property {string} lawyerId
 */
export type ServerSdkListRequest3 = z.infer<typeof serverSdkListRequest3>;

/**
 * Zod schema for mapping API responses to the ServerSdkListRequest3 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkListRequest3Response = z.lazy(() => {
  return z
    .object({
      lawyer_id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyerId: data['lawyer_id'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkListRequest3 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkListRequest3Request = z.lazy(() => {
  return z
    .object({
      lawyerId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyer_id: data['lawyerId'],
    }));
});
