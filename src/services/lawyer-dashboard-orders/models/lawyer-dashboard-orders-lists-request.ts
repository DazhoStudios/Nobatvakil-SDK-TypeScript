import { z } from 'zod';

/**
 * Zod schema for the LawyerDashboardOrdersListsRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const lawyerDashboardOrdersListsRequest = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {LawyerDashboardOrdersListsRequest} lawyerDashboardOrdersListsRequest
 * @property {string}
 */
export type LawyerDashboardOrdersListsRequest = z.infer<typeof lawyerDashboardOrdersListsRequest>;

/**
 * Zod schema for mapping API responses to the LawyerDashboardOrdersListsRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const lawyerDashboardOrdersListsRequestResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the LawyerDashboardOrdersListsRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const lawyerDashboardOrdersListsRequestRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});
