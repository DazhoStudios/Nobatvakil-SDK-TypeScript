import { z } from 'zod';

/**
 * Zod schema for the WalletAddRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const walletAddRequest = z.lazy(() => {
  return z.object({
    amount: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {WalletAddRequest} walletAddRequest
 * @property {string}
 */
export type WalletAddRequest = z.infer<typeof walletAddRequest>;

/**
 * Zod schema for mapping API responses to the WalletAddRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const walletAddRequestResponse = z.lazy(() => {
  return z
    .object({
      amount: z.string().optional().nullable(),
    })
    .transform((data) => ({
      amount: data['amount'],
    }));
});

/**
 * Zod schema for mapping the WalletAddRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const walletAddRequestRequest = z.lazy(() => {
  return z
    .object({
      amount: z.string().optional().nullable(),
    })
    .transform((data) => ({
      amount: data['amount'],
    }));
});
