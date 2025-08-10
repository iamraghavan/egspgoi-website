'use server';

/**
 * @fileOverview AI agent that provides personalized course recommendations.
 *
 * - getCourseRecommendations - A function that takes student information and returns personalized course recommendations.
 * - CourseRecommendationInput - The input type for the getCourseRecommendations function.
 * - CourseRecommendationOutput - The return type for the getCourseRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CourseRecommendationInputSchema = z.object({
  academicBackground: z
    .string()
    .describe("The student's academic background, including degrees and subjects studied."),
  interests: z.string().describe('The student interests and career aspirations.'),
});
export type CourseRecommendationInput = z.infer<typeof CourseRecommendationInputSchema>;

const CourseRecommendationOutputSchema = z.object({
  recommendedCourses: z
    .array(z.string())
    .describe('A list of courses recommended for the student.'),
  reasoning: z
    .string()
    .describe('Explanation of why these courses were recommended.'),
});
export type CourseRecommendationOutput = z.infer<typeof CourseRecommendationOutputSchema>;

export async function getCourseRecommendations(
  input: CourseRecommendationInput
): Promise<CourseRecommendationOutput> {
  return courseRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'courseRecommendationPrompt',
  input: {schema: CourseRecommendationInputSchema},
  output: {schema: CourseRecommendationOutputSchema},
  prompt: `You are an expert academic advisor at EGS Pillay Group of Institutions.

  Based on the student's academic background and interests, recommend courses that would be a good fit for them. Provide a brief explanation for each recommendation.

  Academic Background: {{{academicBackground}}}
  Interests: {{{interests}}}

  Format your output as a JSON object with 'recommendedCourses' (an array of course names) and 'reasoning' (explanation of why each course is recommended).
  `,
});

const courseRecommendationFlow = ai.defineFlow(
  {
    name: 'courseRecommendationFlow',
    inputSchema: CourseRecommendationInputSchema,
    outputSchema: CourseRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
