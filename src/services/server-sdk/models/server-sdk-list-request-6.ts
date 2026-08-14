import { z } from 'zod';

/**
 * Zod schema for the ServerSdkListRequest6 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkListRequest6 = z.lazy(() => {
  return z.object({
    lawyerId: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkListRequest6} serverSdkListRequest6
 * @property {string} lawyerId
 */
export type ServerSdkListRequest6 = z.infer<typeof serverSdkListRequest6>;

/**
 * Zod schema for mapping API responses to the ServerSdkListRequest6 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkListRequest6Response = z.lazy(() => {
  return z
    .object({
      lawyer_id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyerId: data['lawyer_id'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkListRequest6 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkListRequest6Request = z.lazy(() => {
  return z
    .object({
      lawyerId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyer_id: data['lawyerId'],
    }));
});
