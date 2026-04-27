import { z } from 'zod';

/**
 * Zod schema for the LawyerDashboardWalletInfoRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const lawyerDashboardWalletInfoRequest = z.lazy(() => {
  return z.object({
    lawyerId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {LawyerDashboardWalletInfoRequest} lawyerDashboardWalletInfoRequest
 * @property {string}
 */
export type LawyerDashboardWalletInfoRequest = z.infer<typeof lawyerDashboardWalletInfoRequest>;

/**
 * Zod schema for mapping API responses to the LawyerDashboardWalletInfoRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const lawyerDashboardWalletInfoRequestResponse = z.lazy(() => {
  return z
    .object({
      lawyer_id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyerId: data['lawyer_id'],
    }));
});

/**
 * Zod schema for mapping the LawyerDashboardWalletInfoRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const lawyerDashboardWalletInfoRequestRequest = z.lazy(() => {
  return z
    .object({
      lawyerId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyer_id: data['lawyerId'],
    }));
});
