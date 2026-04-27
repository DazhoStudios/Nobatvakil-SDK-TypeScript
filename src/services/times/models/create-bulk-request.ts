import { z } from 'zod';
import {
  TimeSchedules,
  timeSchedules,
  timeSchedulesRequest,
  timeSchedulesResponse,
} from './time-schedules';

/**
 * Zod schema for the CreateBulkRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createBulkRequest = z.lazy(() => {
  return z.object({
    lawyerId: z.number().optional().nullable(),
    start: z.string().optional().nullable(),
    end: z.string().optional().nullable(),
    serviceId: z.array(z.number()).optional().nullable(),
    timeSchedules: z.array(timeSchedules).optional().nullable(),
  });
});

/**
 *
 * @typedef  {CreateBulkRequest} createBulkRequest
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {number[]}
 * @property {TimeSchedules[]}
 */
export type CreateBulkRequest = z.infer<typeof createBulkRequest>;

/**
 * Zod schema for mapping API responses to the CreateBulkRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createBulkRequestResponse = z.lazy(() => {
  return z
    .object({
      lawyer_id: z.number().optional().nullable(),
      start: z.string().optional().nullable(),
      end: z.string().optional().nullable(),
      service_id: z.array(z.number()).optional().nullable(),
      time_schedules: z.array(timeSchedulesResponse).optional().nullable(),
    })
    .transform((data) => ({
      lawyerId: data['lawyer_id'],
      start: data['start'],
      end: data['end'],
      serviceId: data['service_id'],
      timeSchedules: data['time_schedules'],
    }));
});

/**
 * Zod schema for mapping the CreateBulkRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createBulkRequestRequest = z.lazy(() => {
  return z
    .object({
      lawyerId: z.number().optional().nullable(),
      start: z.string().optional().nullable(),
      end: z.string().optional().nullable(),
      serviceId: z.array(z.number()).optional().nullable(),
      timeSchedules: z.array(timeSchedulesRequest).optional().nullable(),
    })
    .transform((data) => ({
      lawyer_id: data['lawyerId'],
      start: data['start'],
      end: data['end'],
      service_id: data['serviceId'],
      time_schedules: data['timeSchedules'],
    }));
});
