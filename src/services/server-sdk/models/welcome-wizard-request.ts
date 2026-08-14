import { z } from 'zod';

/**
 * Zod schema for the WelcomeWizardRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const welcomeWizardRequest = z.lazy(() => {
  return z.object({
    firstName: z.string().optional().nullable(),
    lastName: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    naturalCode: z.string().optional().nullable(),
    gender: z.string().optional().nullable(),
  });
});

/**
 * @typedef {WelcomeWizardRequest} welcomeWizardRequest
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 * @property {string} naturalCode
 * @property {string} gender
 */
export type WelcomeWizardRequest = z.infer<typeof welcomeWizardRequest>;

/**
 * Zod schema for mapping API responses to the WelcomeWizardRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const welcomeWizardRequestResponse = z.lazy(() => {
  return z
    .object({
      first_name: z.string().optional().nullable(),
      last_name: z.string().optional().nullable(),
      email: z.string().optional().nullable(),
      natural_code: z.string().optional().nullable(),
      gender: z.string().optional().nullable(),
    })
    .transform((data) => ({
      firstName: data['first_name'],
      lastName: data['last_name'],
      email: data['email'],
      naturalCode: data['natural_code'],
      gender: data['gender'],
    }));
});

/**
 * Zod schema for mapping the WelcomeWizardRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const welcomeWizardRequestRequest = z.lazy(() => {
  return z
    .object({
      firstName: z.string().optional().nullable(),
      lastName: z.string().optional().nullable(),
      email: z.string().optional().nullable(),
      naturalCode: z.string().optional().nullable(),
      gender: z.string().optional().nullable(),
    })
    .transform((data) => ({
      first_name: data['firstName'],
      last_name: data['lastName'],
      email: data['email'],
      natural_code: data['naturalCode'],
      gender: data['gender'],
    }));
});
