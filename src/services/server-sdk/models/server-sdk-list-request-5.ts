import { z } from 'zod';

/**
 * Zod schema for the ServerSdkListRequest5 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkListRequest5 = z.lazy(() => {
  return z.object({
    lawyerId: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkListRequest5} serverSdkListRequest5
 * @property {string} lawyerId
 */
export type ServerSdkListRequest5 = z.infer<typeof serverSdkListRequest5>;

/**
 * Zod schema for mapping API responses to the ServerSdkListRequest5 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkListRequest5Response = z.lazy(() => {
  return z
    .object({
      lawyer_id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyerId: data['lawyer_id'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkListRequest5 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkListRequest5Request = z.lazy(() => {
  return z
    .object({
      lawyerId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyer_id: data['lawyerId'],
    }));
});
