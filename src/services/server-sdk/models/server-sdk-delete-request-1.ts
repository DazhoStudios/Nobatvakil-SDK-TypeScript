import { z } from 'zod';

/**
 * Zod schema for the ServerSdkDeleteRequest1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkDeleteRequest1 = z.lazy(() => {
  return z.object({
    lawyerId: z.string().optional().nullable(),
    addressId: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkDeleteRequest1} serverSdkDeleteRequest1
 * @property {string} lawyerId
 * @property {string} addressId
 */
export type ServerSdkDeleteRequest1 = z.infer<typeof serverSdkDeleteRequest1>;

/**
 * Zod schema for mapping API responses to the ServerSdkDeleteRequest1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkDeleteRequest1Response = z.lazy(() => {
  return z
    .object({
      lawyer_id: z.string().optional().nullable(),
      address_id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyerId: data['lawyer_id'],
      addressId: data['address_id'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkDeleteRequest1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkDeleteRequest1Request = z.lazy(() => {
  return z
    .object({
      lawyerId: z.string().optional().nullable(),
      addressId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyer_id: data['lawyerId'],
      address_id: data['addressId'],
    }));
});
