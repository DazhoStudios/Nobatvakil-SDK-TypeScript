import { z } from 'zod';

/**
 * Zod schema for the TradeMarketRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const tradeMarketRequest = z.lazy(() => {
  return z.object({
    coin: z.string().optional().nullable(),
  });
});

/**
 * @typedef {TradeMarketRequest} tradeMarketRequest
 * @property {string} coin
 */
export type TradeMarketRequest = z.infer<typeof tradeMarketRequest>;

/**
 * Zod schema for mapping API responses to the TradeMarketRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const tradeMarketRequestResponse = z.lazy(() => {
  return z
    .object({
      coin: z.string().optional().nullable(),
    })
    .transform((data) => ({
      coin: data['coin'],
    }));
});

/**
 * Zod schema for mapping the TradeMarketRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const tradeMarketRequestRequest = z.lazy(() => {
  return z
    .object({
      coin: z.string().optional().nullable(),
    })
    .transform((data) => ({
      coin: data['coin'],
    }));
});
