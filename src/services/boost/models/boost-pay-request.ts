import { z } from 'zod';

/**
 * Zod schema for the BoostPayRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const boostPayRequest = z.lazy(() => {
  return z.object({
    lawyerId: z.string().optional().nullable(),
    subId: z.string().optional().nullable(),
    paymentMethod: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {BoostPayRequest} boostPayRequest
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type BoostPayRequest = z.infer<typeof boostPayRequest>;

/**
 * Zod schema for mapping API responses to the BoostPayRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const boostPayRequestResponse = z.lazy(() => {
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
 * Zod schema for mapping the BoostPayRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const boostPayRequestRequest = z.lazy(() => {
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
