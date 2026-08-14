import { z } from 'zod';

/**
 * Zod schema for the SearchRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchRequest = z.lazy(() => {
  return z.object({
    name: z.string().optional().nullable(),
    gender: z.string().optional().nullable(),
    countryId: z.string().optional().nullable(),
    stateId: z.string().optional().nullable(),
    cityId: z.string().optional().nullable(),
    categoryId: z.string().optional().nullable(),
    sortBy: z.string().optional().nullable(),
    sortDir: z.string().optional().nullable(),
    perPage: z.string().optional().nullable(),
    page: z.string().optional().nullable(),
    typeId: z.string().optional().nullable(),
  });
});

/**
 * @typedef {SearchRequest} searchRequest
 * @property {string} name
 * @property {string} gender
 * @property {string} countryId
 * @property {string} stateId
 * @property {string} cityId
 * @property {string} categoryId
 * @property {string} sortBy
 * @property {string} sortDir
 * @property {string} perPage
 * @property {string} page
 * @property {string} typeId
 */
export type SearchRequest = z.infer<typeof searchRequest>;

/**
 * Zod schema for mapping API responses to the SearchRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchRequestResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional().nullable(),
      gender: z.string().optional().nullable(),
      country_id: z.string().optional().nullable(),
      state_id: z.string().optional().nullable(),
      city_id: z.string().optional().nullable(),
      category_id: z.string().optional().nullable(),
      sort_by: z.string().optional().nullable(),
      sort_dir: z.string().optional().nullable(),
      per_page: z.string().optional().nullable(),
      page: z.string().optional().nullable(),
      type_id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
      gender: data['gender'],
      countryId: data['country_id'],
      stateId: data['state_id'],
      cityId: data['city_id'],
      categoryId: data['category_id'],
      sortBy: data['sort_by'],
      sortDir: data['sort_dir'],
      perPage: data['per_page'],
      page: data['page'],
      typeId: data['type_id'],
    }));
});

/**
 * Zod schema for mapping the SearchRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchRequestRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional().nullable(),
      gender: z.string().optional().nullable(),
      countryId: z.string().optional().nullable(),
      stateId: z.string().optional().nullable(),
      cityId: z.string().optional().nullable(),
      categoryId: z.string().optional().nullable(),
      sortBy: z.string().optional().nullable(),
      sortDir: z.string().optional().nullable(),
      perPage: z.string().optional().nullable(),
      page: z.string().optional().nullable(),
      typeId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
      gender: data['gender'],
      country_id: data['countryId'],
      state_id: data['stateId'],
      city_id: data['cityId'],
      category_id: data['categoryId'],
      sort_by: data['sortBy'],
      sort_dir: data['sortDir'],
      per_page: data['perPage'],
      page: data['page'],
      type_id: data['typeId'],
    }));
});
