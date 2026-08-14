import { z } from 'zod';

/**
 * Zod schema for the ServerSdkUpdateRequest3 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkUpdateRequest3 = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
    lawyerId: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    slug: z.string().optional().nullable(),
    typeId: z.string().optional().nullable(),
    duration: z.string().optional().nullable(),
    amount: z.string().optional().nullable(),
    countryId: z.string().optional().nullable(),
    status: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkUpdateRequest3} serverSdkUpdateRequest3
 * @property {string} id
 * @property {string} lawyerId
 * @property {string} name
 * @property {string} slug
 * @property {string} typeId
 * @property {string} duration
 * @property {string} amount
 * @property {string} countryId
 * @property {string} status
 */
export type ServerSdkUpdateRequest3 = z.infer<typeof serverSdkUpdateRequest3>;

/**
 * Zod schema for mapping API responses to the ServerSdkUpdateRequest3 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkUpdateRequest3Response = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      lawyer_id: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      slug: z.string().optional().nullable(),
      type_id: z.string().optional().nullable(),
      duration: z.string().optional().nullable(),
      amount: z.string().optional().nullable(),
      country_id: z.string().optional().nullable(),
      status: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      lawyerId: data['lawyer_id'],
      name: data['name'],
      slug: data['slug'],
      typeId: data['type_id'],
      duration: data['duration'],
      amount: data['amount'],
      countryId: data['country_id'],
      status: data['status'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkUpdateRequest3 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkUpdateRequest3Request = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      lawyerId: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      slug: z.string().optional().nullable(),
      typeId: z.string().optional().nullable(),
      duration: z.string().optional().nullable(),
      amount: z.string().optional().nullable(),
      countryId: z.string().optional().nullable(),
      status: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      lawyer_id: data['lawyerId'],
      name: data['name'],
      slug: data['slug'],
      type_id: data['typeId'],
      duration: data['duration'],
      amount: data['amount'],
      country_id: data['countryId'],
      status: data['status'],
    }));
});
