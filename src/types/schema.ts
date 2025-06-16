import { z } from 'zod';
import { pattern } from '../constants';

const sequenceValidation = z.string()
    .min(1, { message: 'Последовательность не может быть пустой' })
    .refine(
        (seq) => pattern.test(seq),
        { message: 'Допустимы только латинские буквы A, R, N, D, C, E, Q, G, H, I, L, K, M, F, P, S, T, W, Y, V и символ -' }
    );

export const schema = z.object({
    firstSubsequence: sequenceValidation,
    secondSubsequence: sequenceValidation,
}).superRefine((data, ctx) => {
    if (data.firstSubsequence.length !== data.secondSubsequence.length) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Длина последовательностей должна совпадать",
            path: ["secondSubsequence"]
        });
    }
});

export type Schema = z.infer<typeof schema>;