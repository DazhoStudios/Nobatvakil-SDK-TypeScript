import { z } from 'zod';

/**
 * Zod schema for the LawyerDashboardSignaturesCreateRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const lawyerDashboardSignaturesCreateRequest = z.lazy(() => {
  return z.object({
    lawyerId: z.string().optional().nullable(),
    title: z.string().optional().nullable(),
    image: z.instanceof(ArrayBuffer).optional().nullable(),
  });
});

/**
 *
 * @typedef  {LawyerDashboardSignaturesCreateRequest} lawyerDashboardSignaturesCreateRequest
 * @property {string}
 * @property {string}
 * @property {ArrayBuffer}
 */
export type LawyerDashboardSignaturesCreateRequest = z.infer<
  typeof lawyerDashboardSignaturesCreateRequest
>;

/**
 * Zod schema for mapping API responses to the LawyerDashboardSignaturesCreateRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const lawyerDashboardSignaturesCreateRequestResponse = z.lazy(() => {
  return z
    .object({
      lawyer_id: z.string().optional().nullable(),
      title: z.string().optional().nullable(),
      image: z.instanceof(ArrayBuffer).optional().nullable(),
    })
    .transform((data) => ({
      lawyerId: data['lawyer_id'],
      title: data['title'],
      image: data['image'],
    }));
});

/**
 * Zod schema for mapping the LawyerDashboardSignaturesCreateRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const lawyerDashboardSignaturesCreateRequestRequest = z.lazy(() => {
  return z
    .object({
      lawyerId: z.string().optional().nullable(),
      title: z.string().optional().nullable(),
      image: z.instanceof(ArrayBuffer).optional().nullable(),
    })
    .transform((data) => ({
      lawyer_id: data['lawyerId'],
      title: data['title'],
      image: data['image'],
    }));
});
