import { z } from 'zod';

/**
 * Zod schema for the ServerSdkCreateRequest1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkCreateRequest1 = z.lazy(() => {
  return z.object({
    lawyerId: z.string().optional().nullable(),
    orderId: z.string().optional().nullable(),
    comment: z.string().optional().nullable(),
    serviceTypeId: z.string().optional().nullable(),
    rate: z.string().optional().nullable(),
    suggested: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkCreateRequest1} serverSdkCreateRequest1
 * @property {string} lawyerId
 * @property {string} orderId
 * @property {string} comment
 * @property {string} serviceTypeId
 * @property {string} rate
 * @property {string} suggested
 */
export type ServerSdkCreateRequest1 = z.infer<typeof serverSdkCreateRequest1>;

/**
 * Zod schema for mapping API responses to the ServerSdkCreateRequest1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkCreateRequest1Response = z.lazy(() => {
  return z
    .object({
      lawyer_id: z.string().optional().nullable(),
      order_id: z.string().optional().nullable(),
      comment: z.string().optional().nullable(),
      service_type_id: z.string().optional().nullable(),
      rate: z.string().optional().nullable(),
      suggested: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyerId: data['lawyer_id'],
      orderId: data['order_id'],
      comment: data['comment'],
      serviceTypeId: data['service_type_id'],
      rate: data['rate'],
      suggested: data['suggested'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkCreateRequest1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkCreateRequest1Request = z.lazy(() => {
  return z
    .object({
      lawyerId: z.string().optional().nullable(),
      orderId: z.string().optional().nullable(),
      comment: z.string().optional().nullable(),
      serviceTypeId: z.string().optional().nullable(),
      rate: z.string().optional().nullable(),
      suggested: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyer_id: data['lawyerId'],
      order_id: data['orderId'],
      comment: data['comment'],
      service_type_id: data['serviceTypeId'],
      rate: data['rate'],
      suggested: data['suggested'],
    }));
});
