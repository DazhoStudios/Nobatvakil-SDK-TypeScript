import { z } from 'zod';

/**
 * Zod schema for the EditRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const editRequest = z.lazy(() => {
  return z.object({
    lawyerId: z.string().optional().nullable(),
    addressId: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    telNumbers: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    locationLink: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {EditRequest} editRequest
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type EditRequest = z.infer<typeof editRequest>;

/**
 * Zod schema for mapping API responses to the EditRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const editRequestResponse = z.lazy(() => {
  return z
    .object({
      lawyer_id: z.string().optional().nullable(),
      address_id: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      tel_numbers: z.string().optional().nullable(),
      address: z.string().optional().nullable(),
      location_link: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyerId: data['lawyer_id'],
      addressId: data['address_id'],
      name: data['name'],
      telNumbers: data['tel_numbers'],
      address: data['address'],
      locationLink: data['location_link'],
    }));
});

/**
 * Zod schema for mapping the EditRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const editRequestRequest = z.lazy(() => {
  return z
    .object({
      lawyerId: z.string().optional().nullable(),
      addressId: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      telNumbers: z.string().optional().nullable(),
      address: z.string().optional().nullable(),
      locationLink: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyer_id: data['lawyerId'],
      address_id: data['addressId'],
      name: data['name'],
      tel_numbers: data['telNumbers'],
      address: data['address'],
      location_link: data['locationLink'],
    }));
});
