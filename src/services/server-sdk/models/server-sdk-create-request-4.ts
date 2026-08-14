import { z } from 'zod';

/**
 * Zod schema for the ServerSdkCreateRequest4 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkCreateRequest4 = z.lazy(() => {
  return z.object({
    lawyerId: z.string().optional().nullable(),
    serviceId: z.string().optional().nullable(),
    date: z.string().optional().nullable(),
    time: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkCreateRequest4} serverSdkCreateRequest4
 * @property {string} lawyerId
 * @property {string} serviceId
 * @property {string} date
 * @property {string} time
 */
export type ServerSdkCreateRequest4 = z.infer<typeof serverSdkCreateRequest4>;

/**
 * Zod schema for mapping API responses to the ServerSdkCreateRequest4 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkCreateRequest4Response = z.lazy(() => {
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
 * Zod schema for mapping the ServerSdkCreateRequest4 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkCreateRequest4Request = z.lazy(() => {
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
