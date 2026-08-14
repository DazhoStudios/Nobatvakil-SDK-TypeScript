import { z } from 'zod';

/**
 * Zod schema for the ServerSdkUpdateRequest1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkUpdateRequest1 = z.lazy(() => {
  return z.object({
    pusherEnabled: z.string().optional().nullable(),
    smsEnabled: z.string().optional().nullable(),
    emailEnabled: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkUpdateRequest1} serverSdkUpdateRequest1
 * @property {string} pusherEnabled
 * @property {string} smsEnabled
 * @property {string} emailEnabled
 */
export type ServerSdkUpdateRequest1 = z.infer<typeof serverSdkUpdateRequest1>;

/**
 * Zod schema for mapping API responses to the ServerSdkUpdateRequest1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkUpdateRequest1Response = z.lazy(() => {
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
 * Zod schema for mapping the ServerSdkUpdateRequest1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkUpdateRequest1Request = z.lazy(() => {
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
