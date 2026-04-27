import { z } from 'zod';

/**
 * Zod schema for the AddBalanceRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addBalanceRequest = z.lazy(() => {
  return z.object({
    lawyerId: z.string().optional().nullable(),
    amount: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {AddBalanceRequest} addBalanceRequest
 * @property {string}
 * @property {string}
 */
export type AddBalanceRequest = z.infer<typeof addBalanceRequest>;

/**
 * Zod schema for mapping API responses to the AddBalanceRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addBalanceRequestResponse = z.lazy(() => {
  return z
    .object({
      lawyer_id: z.string().optional().nullable(),
      amount: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyerId: data['lawyer_id'],
      amount: data['amount'],
    }));
});

/**
 * Zod schema for mapping the AddBalanceRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addBalanceRequestRequest = z.lazy(() => {
  return z
    .object({
      lawyerId: z.string().optional().nullable(),
      amount: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyer_id: data['lawyerId'],
      amount: data['amount'],
    }));
});
