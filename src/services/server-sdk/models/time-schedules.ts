import { z } from 'zod';

/**
 * Zod schema for the TimeSchedules model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const timeSchedules = z.lazy(() => {
  return z.object({
    days: z.array(z.number()).optional().nullable(),
    start: z.string().optional().nullable(),
    end: z.string().optional().nullable(),
  });
});

/**
 * @typedef {TimeSchedules} timeSchedules
 * @property {number[]} days
 * @property {string} start
 * @property {string} end
 */
export type TimeSchedules = z.infer<typeof timeSchedules>;

/**
 * Zod schema for mapping API responses to the TimeSchedules application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const timeSchedulesResponse = z.lazy(() => {
  return z
    .object({
      days: z.array(z.number()).optional().nullable(),
      start: z.string().optional().nullable(),
      end: z.string().optional().nullable(),
    })
    .transform((data) => ({
      days: data['days'],
      start: data['start'],
      end: data['end'],
    }));
});

/**
 * Zod schema for mapping the TimeSchedules application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const timeSchedulesRequest = z.lazy(() => {
  return z
    .object({
      days: z.array(z.number()).optional().nullable(),
      start: z.string().optional().nullable(),
      end: z.string().optional().nullable(),
    })
    .transform((data) => ({
      days: data['days'],
      start: data['start'],
      end: data['end'],
    }));
});
