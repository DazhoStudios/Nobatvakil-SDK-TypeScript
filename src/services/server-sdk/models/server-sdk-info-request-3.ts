import { z } from 'zod';

/**
 * Zod schema for the ServerSdkInfoRequest3 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkInfoRequest3 = z.lazy(() => {
  return z.object({
    lawyerId: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkInfoRequest3} serverSdkInfoRequest3
 * @property {string} lawyerId
 */
export type ServerSdkInfoRequest3 = z.infer<typeof serverSdkInfoRequest3>;

/**
 * Zod schema for mapping API responses to the ServerSdkInfoRequest3 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkInfoRequest3Response = z.lazy(() => {
  return z
    .object({
      lawyer_id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyerId: data['lawyer_id'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkInfoRequest3 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkInfoRequest3Request = z.lazy(() => {
  return z
    .object({
      lawyerId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyer_id: data['lawyerId'],
    }));
});
