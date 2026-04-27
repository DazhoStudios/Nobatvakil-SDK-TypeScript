import { z } from 'zod';

/**
 * Zod schema for the VerifyOtpRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const verifyOtpRequest = z.lazy(() => {
  return z.object({
    phoneNumber: z.string().optional().nullable(),
    code: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {VerifyOtpRequest} verifyOtpRequest
 * @property {string}
 * @property {string}
 */
export type VerifyOtpRequest = z.infer<typeof verifyOtpRequest>;

/**
 * Zod schema for mapping API responses to the VerifyOtpRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const verifyOtpRequestResponse = z.lazy(() => {
  return z
    .object({
      phone_number: z.string().optional().nullable(),
      code: z.string().optional().nullable(),
    })
    .transform((data) => ({
      phoneNumber: data['phone_number'],
      code: data['code'],
    }));
});

/**
 * Zod schema for mapping the VerifyOtpRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const verifyOtpRequestRequest = z.lazy(() => {
  return z
    .object({
      phoneNumber: z.string().optional().nullable(),
      code: z.string().optional().nullable(),
    })
    .transform((data) => ({
      phone_number: data['phoneNumber'],
      code: data['code'],
    }));
});
