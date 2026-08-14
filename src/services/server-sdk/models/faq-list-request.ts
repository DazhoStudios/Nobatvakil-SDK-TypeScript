import { z } from 'zod';

/**
 * Zod schema for the FaqListRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const faqListRequest = z.lazy(() => {
  return z.object({
    category: z.string().optional().nullable(),
    city: z.string().optional().nullable(),
    page: z.string().optional().nullable(),
    cityId: z.string().optional().nullable(),
    perPage: z.string().optional().nullable(),
  });
});

/**
 * @typedef {FaqListRequest} faqListRequest
 * @property {string} category
 * @property {string} city
 * @property {string} page
 * @property {string} cityId
 * @property {string} perPage
 */
export type FaqListRequest = z.infer<typeof faqListRequest>;

/**
 * Zod schema for mapping API responses to the FaqListRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const faqListRequestResponse = z.lazy(() => {
  return z
    .object({
      category: z.string().optional().nullable(),
      city: z.string().optional().nullable(),
      page: z.string().optional().nullable(),
      city_id: z.string().optional().nullable(),
      per_page: z.string().optional().nullable(),
    })
    .transform((data) => ({
      category: data['category'],
      city: data['city'],
      page: data['page'],
      cityId: data['city_id'],
      perPage: data['per_page'],
    }));
});

/**
 * Zod schema for mapping the FaqListRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const faqListRequestRequest = z.lazy(() => {
  return z
    .object({
      category: z.string().optional().nullable(),
      city: z.string().optional().nullable(),
      page: z.string().optional().nullable(),
      cityId: z.string().optional().nullable(),
      perPage: z.string().optional().nullable(),
    })
    .transform((data) => ({
      category: data['category'],
      city: data['city'],
      page: data['page'],
      city_id: data['cityId'],
      per_page: data['perPage'],
    }));
});
