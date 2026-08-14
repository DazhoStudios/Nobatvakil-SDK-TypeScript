import { z } from 'zod';

/**
 * Zod schema for the ServerSdkPayRequest1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkPayRequest1 = z.lazy(() => {
  return z.object({
    lawyerId: z.string().optional().nullable(),
    subId: z.string().optional().nullable(),
    paymentMethod: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkPayRequest1} serverSdkPayRequest1
 * @property {string} lawyerId
 * @property {string} subId
 * @property {string} paymentMethod
 */
export type ServerSdkPayRequest1 = z.infer<typeof serverSdkPayRequest1>;

/**
 * Zod schema for mapping API responses to the ServerSdkPayRequest1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkPayRequest1Response = z.lazy(() => {
  return z
    .object({
      lawyer_id: z.string().optional().nullable(),
      sub_id: z.string().optional().nullable(),
      payment_method: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyerId: data['lawyer_id'],
      subId: data['sub_id'],
      paymentMethod: data['payment_method'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkPayRequest1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkPayRequest1Request = z.lazy(() => {
  return z
    .object({
      lawyerId: z.string().optional().nullable(),
      subId: z.string().optional().nullable(),
      paymentMethod: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyer_id: data['lawyerId'],
      sub_id: data['subId'],
      payment_method: data['paymentMethod'],
    }));
});
