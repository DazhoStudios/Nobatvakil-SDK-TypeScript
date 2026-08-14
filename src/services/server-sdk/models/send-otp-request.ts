import { z } from 'zod';

/**
 * Zod schema for the SendOtpRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const sendOtpRequest = z.lazy(() => {
  return z.object({
    phoneNumber: z.string().optional().nullable(),
  });
});

/**
 * @typedef {SendOtpRequest} sendOtpRequest
 * @property {string} phoneNumber
 */
export type SendOtpRequest = z.infer<typeof sendOtpRequest>;

/**
 * Zod schema for mapping API responses to the SendOtpRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sendOtpRequestResponse = z.lazy(() => {
  return z
    .object({
      phone_number: z.string().optional().nullable(),
    })
    .transform((data) => ({
      phoneNumber: data['phone_number'],
    }));
});

/**
 * Zod schema for mapping the SendOtpRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sendOtpRequestRequest = z.lazy(() => {
  return z
    .object({
      phoneNumber: z.string().optional().nullable(),
    })
    .transform((data) => ({
      phone_number: data['phoneNumber'],
    }));
});
