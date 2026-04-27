import { z } from 'zod';

/**
 * Zod schema for the OfficeRoomsListRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const officeRoomsListRequest = z.lazy(() => {
  return z.object({
    lawyerId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {OfficeRoomsListRequest} officeRoomsListRequest
 * @property {string}
 */
export type OfficeRoomsListRequest = z.infer<typeof officeRoomsListRequest>;

/**
 * Zod schema for mapping API responses to the OfficeRoomsListRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const officeRoomsListRequestResponse = z.lazy(() => {
  return z
    .object({
      lawyer_id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyerId: data['lawyer_id'],
    }));
});

/**
 * Zod schema for mapping the OfficeRoomsListRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const officeRoomsListRequestRequest = z.lazy(() => {
  return z
    .object({
      lawyerId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyer_id: data['lawyerId'],
    }));
});
