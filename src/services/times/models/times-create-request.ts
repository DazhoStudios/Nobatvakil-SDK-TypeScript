import { z } from 'zod';

/**
 * Zod schema for the TimesCreateRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const timesCreateRequest = z.lazy(() => {
  return z.object({
    lawyerId: z.string().optional().nullable(),
    serviceId: z.string().optional().nullable(),
    date: z.string().optional().nullable(),
    time: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {TimesCreateRequest} timesCreateRequest
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type TimesCreateRequest = z.infer<typeof timesCreateRequest>;

/**
 * Zod schema for mapping API responses to the TimesCreateRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const timesCreateRequestResponse = z.lazy(() => {
  return z
    .object({
      lawyer_id: z.string().optional().nullable(),
      service_id: z.string().optional().nullable(),
      date: z.string().optional().nullable(),
      time: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyerId: data['lawyer_id'],
      serviceId: data['service_id'],
      date: data['date'],
      time: data['time'],
    }));
});

/**
 * Zod schema for mapping the TimesCreateRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const timesCreateRequestRequest = z.lazy(() => {
  return z
    .object({
      lawyerId: z.string().optional().nullable(),
      serviceId: z.string().optional().nullable(),
      date: z.string().optional().nullable(),
      time: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyer_id: data['lawyerId'],
      service_id: data['serviceId'],
      date: data['date'],
      time: data['time'],
    }));
});
