import { z } from 'zod';

/**
 * Zod schema for the OfficeRoomsCreateRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const officeRoomsCreateRequest = z.lazy(() => {
  return z.object({
    lawyerId: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    telNumbers: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    locationLink: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {OfficeRoomsCreateRequest} officeRoomsCreateRequest
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type OfficeRoomsCreateRequest = z.infer<typeof officeRoomsCreateRequest>;

/**
 * Zod schema for mapping API responses to the OfficeRoomsCreateRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const officeRoomsCreateRequestResponse = z.lazy(() => {
  return z
    .object({
      lawyer_id: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      tel_numbers: z.string().optional().nullable(),
      address: z.string().optional().nullable(),
      location_link: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyerId: data['lawyer_id'],
      name: data['name'],
      telNumbers: data['tel_numbers'],
      address: data['address'],
      locationLink: data['location_link'],
    }));
});

/**
 * Zod schema for mapping the OfficeRoomsCreateRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const officeRoomsCreateRequestRequest = z.lazy(() => {
  return z
    .object({
      lawyerId: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      telNumbers: z.string().optional().nullable(),
      address: z.string().optional().nullable(),
      locationLink: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyer_id: data['lawyerId'],
      name: data['name'],
      tel_numbers: data['telNumbers'],
      address: data['address'],
      location_link: data['locationLink'],
    }));
});
