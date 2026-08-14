import { z } from 'zod';

/**
 * Zod schema for the ServerSdkSendMessageRequest2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkSendMessageRequest2 = z.lazy(() => {
  return z.object({
    message: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkSendMessageRequest2} serverSdkSendMessageRequest2
 * @property {string} message
 */
export type ServerSdkSendMessageRequest2 = z.infer<typeof serverSdkSendMessageRequest2>;

/**
 * Zod schema for mapping API responses to the ServerSdkSendMessageRequest2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkSendMessageRequest2Response = z.lazy(() => {
  return z
    .object({
      message: z.string().optional().nullable(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkSendMessageRequest2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkSendMessageRequest2Request = z.lazy(() => {
  return z
    .object({
      message: z.string().optional().nullable(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});
