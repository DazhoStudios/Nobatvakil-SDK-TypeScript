import { z } from 'zod';

/**
 * Zod schema for the ServerSdkCreateRequest10 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkCreateRequest10 = z.lazy(() => {
  return z.object({
    lawyerId: z.string().optional().nullable(),
    serviceId: z.string().optional().nullable(),
    dateId: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkCreateRequest10} serverSdkCreateRequest10
 * @property {string} lawyerId
 * @property {string} serviceId
 * @property {string} dateId
 */
export type ServerSdkCreateRequest10 = z.infer<typeof serverSdkCreateRequest10>;

/**
 * Zod schema for mapping API responses to the ServerSdkCreateRequest10 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkCreateRequest10Response = z.lazy(() => {
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
 * Zod schema for mapping the ServerSdkCreateRequest10 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkCreateRequest10Request = z.lazy(() => {
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
