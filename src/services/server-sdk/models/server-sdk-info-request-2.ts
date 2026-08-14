import { z } from 'zod';

/**
 * Zod schema for the ServerSdkInfoRequest2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkInfoRequest2 = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
    lawyerId: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkInfoRequest2} serverSdkInfoRequest2
 * @property {string} id
 * @property {string} lawyerId
 */
export type ServerSdkInfoRequest2 = z.infer<typeof serverSdkInfoRequest2>;

/**
 * Zod schema for mapping API responses to the ServerSdkInfoRequest2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkInfoRequest2Response = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      lawyer_id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      lawyerId: data['lawyer_id'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkInfoRequest2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkInfoRequest2Request = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      lawyerId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      lawyer_id: data['lawyerId'],
    }));
});
