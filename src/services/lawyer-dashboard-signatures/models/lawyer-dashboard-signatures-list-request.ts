import { z } from 'zod';

/**
 * Zod schema for the LawyerDashboardSignaturesListRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const lawyerDashboardSignaturesListRequest = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {LawyerDashboardSignaturesListRequest} lawyerDashboardSignaturesListRequest
 * @property {string}
 */
export type LawyerDashboardSignaturesListRequest = z.infer<
  typeof lawyerDashboardSignaturesListRequest
>;

/**
 * Zod schema for mapping API responses to the LawyerDashboardSignaturesListRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const lawyerDashboardSignaturesListRequestResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the LawyerDashboardSignaturesListRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const lawyerDashboardSignaturesListRequestRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});
