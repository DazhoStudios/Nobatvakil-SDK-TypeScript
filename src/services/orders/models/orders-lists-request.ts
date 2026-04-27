import { z } from 'zod';

/**
 * Zod schema for the OrdersListsRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const ordersListsRequest = z.lazy(() => {
  return z.object({
    page: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {OrdersListsRequest} ordersListsRequest
 * @property {string}
 */
export type OrdersListsRequest = z.infer<typeof ordersListsRequest>;

/**
 * Zod schema for mapping API responses to the OrdersListsRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const ordersListsRequestResponse = z.lazy(() => {
  return z
    .object({
      page: z.string().optional().nullable(),
    })
    .transform((data) => ({
      page: data['page'],
    }));
});

/**
 * Zod schema for mapping the OrdersListsRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const ordersListsRequestRequest = z.lazy(() => {
  return z
    .object({
      page: z.string().optional().nullable(),
    })
    .transform((data) => ({
      page: data['page'],
    }));
});
