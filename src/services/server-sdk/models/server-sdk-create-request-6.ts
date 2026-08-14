import { z } from 'zod';

/**
 * Zod schema for the ServerSdkCreateRequest6 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const serverSdkCreateRequest6 = z.lazy(() => {
  return z.object({
    lawyerId: z.string().optional().nullable(),
    cardId: z.string().optional().nullable(),
  });
});

/**
 * @typedef {ServerSdkCreateRequest6} serverSdkCreateRequest6
 * @property {string} lawyerId
 * @property {string} cardId
 */
export type ServerSdkCreateRequest6 = z.infer<typeof serverSdkCreateRequest6>;

/**
 * Zod schema for mapping API responses to the ServerSdkCreateRequest6 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkCreateRequest6Response = z.lazy(() => {
  return z
    .object({
      lawyer_id: z.string().optional().nullable(),
      card_id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyerId: data['lawyer_id'],
      cardId: data['card_id'],
    }));
});

/**
 * Zod schema for mapping the ServerSdkCreateRequest6 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const serverSdkCreateRequest6Request = z.lazy(() => {
  return z
    .object({
      lawyerId: z.string().optional().nullable(),
      cardId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      lawyer_id: data['lawyerId'],
      card_id: data['cardId'],
    }));
});
