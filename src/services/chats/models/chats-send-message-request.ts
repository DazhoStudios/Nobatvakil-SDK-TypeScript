import { z } from 'zod';

/**
 * Zod schema for the ChatsSendMessageRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const chatsSendMessageRequest = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
    message: z.string().optional().nullable(),
    files: z.instanceof(ArrayBuffer).optional().nullable(),
  });
});

/**
 *
 * @typedef  {ChatsSendMessageRequest} chatsSendMessageRequest
 * @property {string}
 * @property {string}
 * @property {ArrayBuffer}
 */
export type ChatsSendMessageRequest = z.infer<typeof chatsSendMessageRequest>;

/**
 * Zod schema for mapping API responses to the ChatsSendMessageRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const chatsSendMessageRequestResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      message: z.string().optional().nullable(),
      files: z.instanceof(ArrayBuffer).optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      message: data['message'],
      files: data['files'],
    }));
});

/**
 * Zod schema for mapping the ChatsSendMessageRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const chatsSendMessageRequestRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      message: z.string().optional().nullable(),
      files: z.instanceof(ArrayBuffer).optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      message: data['message'],
      files: data['files'],
    }));
});
