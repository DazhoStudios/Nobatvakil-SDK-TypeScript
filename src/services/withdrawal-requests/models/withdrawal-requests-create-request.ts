import { z } from 'zod';

/**
 * Zod schema for the WithdrawalRequestsCreateRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const withdrawalRequestsCreateRequest = z.lazy(() => {
  return z.object({
    lawyerId: z.string().optional().nullable(),
    cardId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {WithdrawalRequestsCreateRequest} withdrawalRequestsCreateRequest
 * @property {string}
 * @property {string}
 */
export type WithdrawalRequestsCreateRequest = z.infer<typeof withdrawalRequestsCreateRequest>;

/**
 * Zod schema for mapping API responses to the WithdrawalRequestsCreateRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const withdrawalRequestsCreateRequestResponse = z.lazy(() => {
  return z
    .object({
      lawyer_id: z.string().optional().nullable(),
      card_id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyerId: data['lawyer_id'],
      cardId: data['card_id'],
    }));
});

/**
 * Zod schema for mapping the WithdrawalRequestsCreateRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const withdrawalRequestsCreateRequestRequest = z.lazy(() => {
  return z
    .object({
      lawyerId: z.string().optional().nullable(),
      cardId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyer_id: data['lawyerId'],
      card_id: data['cardId'],
    }));
});
