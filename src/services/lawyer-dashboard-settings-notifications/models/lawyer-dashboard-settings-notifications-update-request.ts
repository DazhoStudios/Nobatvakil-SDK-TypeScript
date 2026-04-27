import { z } from 'zod';

/**
 * Zod schema for the LawyerDashboardSettingsNotificationsUpdateRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const lawyerDashboardSettingsNotificationsUpdateRequest = z.lazy(() => {
  return z.object({
    pusherEnabled: z.string().optional().nullable(),
    smsEnabled: z.string().optional().nullable(),
    emailEnabled: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {LawyerDashboardSettingsNotificationsUpdateRequest} lawyerDashboardSettingsNotificationsUpdateRequest
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type LawyerDashboardSettingsNotificationsUpdateRequest = z.infer<
  typeof lawyerDashboardSettingsNotificationsUpdateRequest
>;

/**
 * Zod schema for mapping API responses to the LawyerDashboardSettingsNotificationsUpdateRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const lawyerDashboardSettingsNotificationsUpdateRequestResponse = z.lazy(() => {
  return z
    .object({
      pusher_enabled: z.string().optional().nullable(),
      sms_enabled: z.string().optional().nullable(),
      email_enabled: z.string().optional().nullable(),
    })
    .transform((data) => ({
      pusherEnabled: data['pusher_enabled'],
      smsEnabled: data['sms_enabled'],
      emailEnabled: data['email_enabled'],
    }));
});

/**
 * Zod schema for mapping the LawyerDashboardSettingsNotificationsUpdateRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const lawyerDashboardSettingsNotificationsUpdateRequestRequest = z.lazy(() => {
  return z
    .object({
      pusherEnabled: z.string().optional().nullable(),
      smsEnabled: z.string().optional().nullable(),
      emailEnabled: z.string().optional().nullable(),
    })
    .transform((data) => ({
      pusher_enabled: data['pusherEnabled'],
      sms_enabled: data['smsEnabled'],
      email_enabled: data['emailEnabled'],
    }));
});
