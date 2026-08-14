import { z } from 'zod';

/**
 * Zod schema for the ServerSdkSendMessageRequest1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkSendMessageRequest1 = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
    message: z.string().optional().nullable(),
    files: z.instanceof(ArrayBuffer).optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkSendMessageRequest1} serverSdkSendMessageRequest1
 * @property {string} id
 * @property {string} message
 * @property {ArrayBuffer} files
 */
export type ServerSdkSendMessageRequest1 = z.infer<typeof serverSdkSendMessageRequest1>;

/**
 * Zod schema for mapping API responses to the ServerSdkSendMessageRequest1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkSendMessageRequest1Response = z.lazy(() => {
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
 * Zod schema for mapping the ServerSdkSendMessageRequest1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkSendMessageRequest1Request = z.lazy(() => {
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
