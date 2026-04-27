import { z } from 'zod';

/**
 * Zod schema for the AnswerRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const answerRequest = z.lazy(() => {
  return z.object({
    toPeer: z.string().optional().nullable(),
    sdp: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {AnswerRequest} answerRequest
 * @property {string}
 * @property {string}
 */
export type AnswerRequest = z.infer<typeof answerRequest>;

/**
 * Zod schema for mapping API responses to the AnswerRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const answerRequestResponse = z.lazy(() => {
  return z
    .object({
      to_peer: z.string().optional().nullable(),
      sdp: z.string().optional().nullable(),
    })
    .transform((data) => ({
      toPeer: data['to_peer'],
      sdp: data['sdp'],
    }));
});

/**
 * Zod schema for mapping the AnswerRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const answerRequestRequest = z.lazy(() => {
  return z
    .object({
      toPeer: z.string().optional().nullable(),
      sdp: z.string().optional().nullable(),
    })
    .transform((data) => ({
      to_peer: data['toPeer'],
      sdp: data['sdp'],
    }));
});
