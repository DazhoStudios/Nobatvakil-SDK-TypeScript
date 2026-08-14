import { z } from 'zod';

/**
 * Zod schema for the ServerSdkListRequest2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkListRequest2 = z.lazy(() => {
  return z.object({
    lawyerId: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkListRequest2} serverSdkListRequest2
 * @property {string} lawyerId
 */
export type ServerSdkListRequest2 = z.infer<typeof serverSdkListRequest2>;

/**
 * Zod schema for mapping API responses to the ServerSdkListRequest2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkListRequest2Response = z.lazy(() => {
  return z
    .object({
      lawyer_id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyerId: data['lawyer_id'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkListRequest2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkListRequest2Request = z.lazy(() => {
  return z
    .object({
      lawyerId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyer_id: data['lawyerId'],
    }));
});
