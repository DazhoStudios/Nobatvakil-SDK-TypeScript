import { z } from 'zod';

/**
 * Zod schema for the ServerSdkUpdateRequest2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkUpdateRequest2 = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
    lawyerId: z.string().optional().nullable(),
    serviceId: z.string().optional().nullable(),
    date: z.string().optional().nullable(),
    time: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkUpdateRequest2} serverSdkUpdateRequest2
 * @property {string} id
 * @property {string} lawyerId
 * @property {string} serviceId
 * @property {string} date
 * @property {string} time
 */
export type ServerSdkUpdateRequest2 = z.infer<typeof serverSdkUpdateRequest2>;

/**
 * Zod schema for mapping API responses to the ServerSdkUpdateRequest2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkUpdateRequest2Response = z.lazy(() => {
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
 * Zod schema for mapping the ServerSdkUpdateRequest2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkUpdateRequest2Request = z.lazy(() => {
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
