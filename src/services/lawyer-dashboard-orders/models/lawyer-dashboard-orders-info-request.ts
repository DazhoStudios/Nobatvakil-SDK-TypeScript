import { z } from 'zod';

/**
 * Zod schema for the LawyerDashboardOrdersInfoRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const lawyerDashboardOrdersInfoRequest = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
    lawyerId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {LawyerDashboardOrdersInfoRequest} lawyerDashboardOrdersInfoRequest
 * @property {string}
 * @property {string}
 */
export type LawyerDashboardOrdersInfoRequest = z.infer<typeof lawyerDashboardOrdersInfoRequest>;

/**
 * Zod schema for mapping API responses to the LawyerDashboardOrdersInfoRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const lawyerDashboardOrdersInfoRequestResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      lawyer_id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      lawyerId: data['lawyer_id'],
    }));
});

/**
 * Zod schema for mapping the LawyerDashboardOrdersInfoRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const lawyerDashboardOrdersInfoRequestRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      lawyerId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      lawyer_id: data['lawyerId'],
    }));
});
