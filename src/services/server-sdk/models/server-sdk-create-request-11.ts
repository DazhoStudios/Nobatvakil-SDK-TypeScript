import { z } from 'zod';

/**
 * Zod schema for the ServerSdkCreateRequest11 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkCreateRequest11 = z.lazy(() => {
  return z.object({
    subject: z.string().optional().nullable(),
    message: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkCreateRequest11} serverSdkCreateRequest11
 * @property {string} subject
 * @property {string} message
 */
export type ServerSdkCreateRequest11 = z.infer<typeof serverSdkCreateRequest11>;

/**
 * Zod schema for mapping API responses to the ServerSdkCreateRequest11 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkCreateRequest11Response = z.lazy(() => {
  return z
    .object({
      subject: z.string().optional().nullable(),
      message: z.string().optional().nullable(),
    })
    .transform((data) => ({
      subject: data['subject'],
      message: data['message'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkCreateRequest11 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkCreateRequest11Request = z.lazy(() => {
  return z
    .object({
      subject: z.string().optional().nullable(),
      message: z.string().optional().nullable(),
    })
    .transform((data) => ({
      subject: data['subject'],
      message: data['message'],
    }));
});
