import { z } from 'zod';

/**
 * Zod schema for the LawyerCreateRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const lawyerCreateRequest = z.lazy(() => {
  return z.object({
    firstName: z.string().optional().nullable(),
    lastName: z.string().optional().nullable(),
    biography: z.string().optional().nullable(),
    phoneNumber: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    code: z.string().optional().nullable(),
    countryId: z.string().optional().nullable(),
    stateId: z.string().optional().nullable(),
    cityId: z.string().optional().nullable(),
    startWorkingDate: z.string().optional().nullable(),
    gender: z.string().optional().nullable(),
    issueDate: z.string().optional().nullable(),
    licenseLevel: z.string().optional().nullable(),
    issuingAuthority: z.string().optional().nullable(),
    type: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {LawyerCreateRequest} lawyerCreateRequest
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type LawyerCreateRequest = z.infer<typeof lawyerCreateRequest>;

/**
 * Zod schema for mapping API responses to the LawyerCreateRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const lawyerCreateRequestResponse = z.lazy(() => {
  return z
    .object({
      first_name: z.string().optional().nullable(),
      last_name: z.string().optional().nullable(),
      biography: z.string().optional().nullable(),
      phone_number: z.string().optional().nullable(),
      email: z.string().optional().nullable(),
      code: z.string().optional().nullable(),
      country_id: z.string().optional().nullable(),
      state_id: z.string().optional().nullable(),
      city_id: z.string().optional().nullable(),
      start_working_date: z.string().optional().nullable(),
      gender: z.string().optional().nullable(),
      issue_date: z.string().optional().nullable(),
      license_level: z.string().optional().nullable(),
      issuing_authority: z.string().optional().nullable(),
      type: z.string().optional().nullable(),
    })
    .transform((data) => ({
      firstName: data['first_name'],
      lastName: data['last_name'],
      biography: data['biography'],
      phoneNumber: data['phone_number'],
      email: data['email'],
      code: data['code'],
      countryId: data['country_id'],
      stateId: data['state_id'],
      cityId: data['city_id'],
      startWorkingDate: data['start_working_date'],
      gender: data['gender'],
      issueDate: data['issue_date'],
      licenseLevel: data['license_level'],
      issuingAuthority: data['issuing_authority'],
      type: data['type'],
    }));
});

/**
 * Zod schema for mapping the LawyerCreateRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const lawyerCreateRequestRequest = z.lazy(() => {
  return z
    .object({
      firstName: z.string().optional().nullable(),
      lastName: z.string().optional().nullable(),
      biography: z.string().optional().nullable(),
      phoneNumber: z.string().optional().nullable(),
      email: z.string().optional().nullable(),
      code: z.string().optional().nullable(),
      countryId: z.string().optional().nullable(),
      stateId: z.string().optional().nullable(),
      cityId: z.string().optional().nullable(),
      startWorkingDate: z.string().optional().nullable(),
      gender: z.string().optional().nullable(),
      issueDate: z.string().optional().nullable(),
      licenseLevel: z.string().optional().nullable(),
      issuingAuthority: z.string().optional().nullable(),
      type: z.string().optional().nullable(),
    })
    .transform((data) => ({
      first_name: data['firstName'],
      last_name: data['lastName'],
      biography: data['biography'],
      phone_number: data['phoneNumber'],
      email: data['email'],
      code: data['code'],
      country_id: data['countryId'],
      state_id: data['stateId'],
      city_id: data['cityId'],
      start_working_date: data['startWorkingDate'],
      gender: data['gender'],
      issue_date: data['issueDate'],
      license_level: data['licenseLevel'],
      issuing_authority: data['issuingAuthority'],
      type: data['type'],
    }));
});
