import { z } from 'zod';

/**
 * Zod schema for the TimesRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const timesRequest = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
    serviceId: z.string().optional().nullable(),
  });
});

/**
 * @typedef {TimesRequest} timesRequest
 * @property {string} id
 * @property {string} serviceId
 */
export type TimesRequest = z.infer<typeof timesRequest>;

/**
 * Zod schema for mapping API responses to the TimesRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const timesRequestResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      service_id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      serviceId: data['service_id'],
    }));
});

/**
 * Zod schema for mapping the TimesRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const timesRequestRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      serviceId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      service_id: data['serviceId'],
    }));
});
