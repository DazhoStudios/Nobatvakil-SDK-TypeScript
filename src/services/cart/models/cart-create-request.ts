import { z } from 'zod';

/**
 * Zod schema for the CartCreateRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const cartCreateRequest = z.lazy(() => {
  return z.object({
    lawyerId: z.string().optional().nullable(),
    serviceId: z.string().optional().nullable(),
    dateId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {CartCreateRequest} cartCreateRequest
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type CartCreateRequest = z.infer<typeof cartCreateRequest>;

/**
 * Zod schema for mapping API responses to the CartCreateRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const cartCreateRequestResponse = z.lazy(() => {
  return z
    .object({
      lawyer_id: z.string().optional().nullable(),
      service_id: z.string().optional().nullable(),
      date_id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyerId: data['lawyer_id'],
      serviceId: data['service_id'],
      dateId: data['date_id'],
    }));
});

/**
 * Zod schema for mapping the CartCreateRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const cartCreateRequestRequest = z.lazy(() => {
  return z
    .object({
      lawyerId: z.string().optional().nullable(),
      serviceId: z.string().optional().nullable(),
      dateId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyer_id: data['lawyerId'],
      service_id: data['serviceId'],
      date_id: data['dateId'],
    }));
});
