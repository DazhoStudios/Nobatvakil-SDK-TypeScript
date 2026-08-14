import { z } from 'zod';

/**
 * Zod schema for the AddCouponRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addCouponRequest = z.lazy(() => {
  return z.object({
    cartId: z.string().optional().nullable(),
    code: z.string().optional().nullable(),
  });
});

/**
 * @typedef {AddCouponRequest} addCouponRequest
 * @property {string} cartId
 * @property {string} code
 */
export type AddCouponRequest = z.infer<typeof addCouponRequest>;

/**
 * Zod schema for mapping API responses to the AddCouponRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addCouponRequestResponse = z.lazy(() => {
  return z
    .object({
      cart_id: z.string().optional().nullable(),
      code: z.string().optional().nullable(),
    })
    .transform((data) => ({
      cartId: data['cart_id'],
      code: data['code'],
    }));
});

/**
 * Zod schema for mapping the AddCouponRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addCouponRequestRequest = z.lazy(() => {
  return z
    .object({
      cartId: z.string().optional().nullable(),
      code: z.string().optional().nullable(),
    })
    .transform((data) => ({
      cart_id: data['cartId'],
      code: data['code'],
    }));
});
