import { z } from 'zod';

/**
 * Zod schema for the ServerSdkCreateRequest5 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkCreateRequest5 = z.lazy(() => {
  return z.object({
    lawyerId: z.string().optional().nullable(),
    shebaNumber: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkCreateRequest5} serverSdkCreateRequest5
 * @property {string} lawyerId
 * @property {string} shebaNumber
 */
export type ServerSdkCreateRequest5 = z.infer<typeof serverSdkCreateRequest5>;

/**
 * Zod schema for mapping API responses to the ServerSdkCreateRequest5 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkCreateRequest5Response = z.lazy(() => {
  return z
    .object({
      lawyer_id: z.string().optional().nullable(),
      sheba_number: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyerId: data['lawyer_id'],
      shebaNumber: data['sheba_number'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkCreateRequest5 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkCreateRequest5Request = z.lazy(() => {
  return z
    .object({
      lawyerId: z.string().optional().nullable(),
      shebaNumber: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyer_id: data['lawyerId'],
      sheba_number: data['shebaNumber'],
    }));
});
