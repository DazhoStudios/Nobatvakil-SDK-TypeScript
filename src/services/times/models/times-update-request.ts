import { z } from 'zod';

/**
 * Zod schema for the TimesUpdateRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const timesUpdateRequest = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
    lawyerId: z.string().optional().nullable(),
    serviceId: z.string().optional().nullable(),
    date: z.string().optional().nullable(),
    time: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {TimesUpdateRequest} timesUpdateRequest
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type TimesUpdateRequest = z.infer<typeof timesUpdateRequest>;

/**
 * Zod schema for mapping API responses to the TimesUpdateRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const timesUpdateRequestResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      lawyer_id: z.string().optional().nullable(),
      service_id: z.string().optional().nullable(),
      date: z.string().optional().nullable(),
      time: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      lawyerId: data['lawyer_id'],
      serviceId: data['service_id'],
      date: data['date'],
      time: data['time'],
    }));
});

/**
 * Zod schema for mapping the TimesUpdateRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const timesUpdateRequestRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      lawyerId: z.string().optional().nullable(),
      serviceId: z.string().optional().nullable(),
      date: z.string().optional().nullable(),
      time: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      lawyer_id: data['lawyerId'],
      service_id: data['serviceId'],
      date: data['date'],
      time: data['time'],
    }));
});
