import { z } from 'zod';

/**
 * Zod schema for the LawyerDashboardAchievementBadgeListRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const lawyerDashboardAchievementBadgeListRequest = z.lazy(() => {
  return z.object({
    lawyerId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {LawyerDashboardAchievementBadgeListRequest} lawyerDashboardAchievementBadgeListRequest
 * @property {string}
 */
export type LawyerDashboardAchievementBadgeListRequest = z.infer<
  typeof lawyerDashboardAchievementBadgeListRequest
>;

/**
 * Zod schema for mapping API responses to the LawyerDashboardAchievementBadgeListRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const lawyerDashboardAchievementBadgeListRequestResponse = z.lazy(() => {
  return z
    .object({
      lawyer_id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyerId: data['lawyer_id'],
    }));
});

/**
 * Zod schema for mapping the LawyerDashboardAchievementBadgeListRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const lawyerDashboardAchievementBadgeListRequestRequest = z.lazy(() => {
  return z
    .object({
      lawyerId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyer_id: data['lawyerId'],
    }));
});
