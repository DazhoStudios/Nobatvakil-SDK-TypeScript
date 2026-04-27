import { z } from 'zod';

/**
 * Zod schema for the LawyerDashboardCategoryRemoveRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const lawyerDashboardCategoryRemoveRequest = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
    categoryId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {LawyerDashboardCategoryRemoveRequest} lawyerDashboardCategoryRemoveRequest
 * @property {string}
 * @property {string}
 */
export type LawyerDashboardCategoryRemoveRequest = z.infer<
  typeof lawyerDashboardCategoryRemoveRequest
>;

/**
 * Zod schema for mapping API responses to the LawyerDashboardCategoryRemoveRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const lawyerDashboardCategoryRemoveRequestResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      category_id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      categoryId: data['category_id'],
    }));
});

/**
 * Zod schema for mapping the LawyerDashboardCategoryRemoveRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const lawyerDashboardCategoryRemoveRequestRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      categoryId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      category_id: data['categoryId'],
    }));
});
