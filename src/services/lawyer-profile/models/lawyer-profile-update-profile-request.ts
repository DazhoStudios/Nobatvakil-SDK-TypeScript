import { z } from 'zod';

/**
 * Zod schema for the LawyerProfileUpdateProfileRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const lawyerProfileUpdateProfileRequest = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
    firstName: z.string().optional().nullable(),
    lastName: z.string().optional().nullable(),
    biography: z.string().optional().nullable(),
    phoneNumber: z.string().optional().nullable(),
    startWorkingDate: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {LawyerProfileUpdateProfileRequest} lawyerProfileUpdateProfileRequest
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type LawyerProfileUpdateProfileRequest = z.infer<typeof lawyerProfileUpdateProfileRequest>;

/**
 * Zod schema for mapping API responses to the LawyerProfileUpdateProfileRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const lawyerProfileUpdateProfileRequestResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      first_name: z.string().optional().nullable(),
      last_name: z.string().optional().nullable(),
      biography: z.string().optional().nullable(),
      phone_number: z.string().optional().nullable(),
      start_working_date: z.string().optional().nullable(),
      email: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      firstName: data['first_name'],
      lastName: data['last_name'],
      biography: data['biography'],
      phoneNumber: data['phone_number'],
      startWorkingDate: data['start_working_date'],
      email: data['email'],
    }));
});

/**
 * Zod schema for mapping the LawyerProfileUpdateProfileRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const lawyerProfileUpdateProfileRequestRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      firstName: z.string().optional().nullable(),
      lastName: z.string().optional().nullable(),
      biography: z.string().optional().nullable(),
      phoneNumber: z.string().optional().nullable(),
      startWorkingDate: z.string().optional().nullable(),
      email: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      first_name: data['firstName'],
      last_name: data['lastName'],
      biography: data['biography'],
      phone_number: data['phoneNumber'],
      start_working_date: data['startWorkingDate'],
      email: data['email'],
    }));
});
