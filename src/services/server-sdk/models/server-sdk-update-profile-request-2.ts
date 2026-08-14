import { z } from 'zod';

/**
 * Zod schema for the ServerSdkUpdateProfileRequest2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkUpdateProfileRequest2 = z.lazy(() => {
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
 * @typedef {ServerSdkUpdateProfileRequest2} serverSdkUpdateProfileRequest2
 * @property {string} id
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} biography
 * @property {string} phoneNumber
 * @property {string} startWorkingDate
 * @property {string} email
 */
export type ServerSdkUpdateProfileRequest2 = z.infer<typeof serverSdkUpdateProfileRequest2>;

/**
 * Zod schema for mapping API responses to the ServerSdkUpdateProfileRequest2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkUpdateProfileRequest2Response = z.lazy(() => {
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
 * Zod schema for mapping the ServerSdkUpdateProfileRequest2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkUpdateProfileRequest2Request = z.lazy(() => {
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
