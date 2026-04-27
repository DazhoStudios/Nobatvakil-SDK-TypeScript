import { z } from 'zod';

/**
 * Zod schema for the OfficeRoomsDeleteRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const officeRoomsDeleteRequest = z.lazy(() => {
  return z.object({
    lawyerId: z.string().optional().nullable(),
    addressId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {OfficeRoomsDeleteRequest} officeRoomsDeleteRequest
 * @property {string}
 * @property {string}
 */
export type OfficeRoomsDeleteRequest = z.infer<typeof officeRoomsDeleteRequest>;

/**
 * Zod schema for mapping API responses to the OfficeRoomsDeleteRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const officeRoomsDeleteRequestResponse = z.lazy(() => {
  return z
    .object({
      lawyer_id: z.string().optional().nullable(),
      address_id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyerId: data['lawyer_id'],
      addressId: data['address_id'],
    }));
});

/**
 * Zod schema for mapping the OfficeRoomsDeleteRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const officeRoomsDeleteRequestRequest = z.lazy(() => {
  return z
    .object({
      lawyerId: z.string().optional().nullable(),
      addressId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyer_id: data['lawyerId'],
      address_id: data['addressId'],
    }));
});
