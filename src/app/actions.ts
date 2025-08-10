"use server";

import {
  getCourseRecommendations,
  type CourseRecommendationInput,
  type CourseRecommendationOutput,
} from "@/ai/flows/course-recommendation";

export async function handleCourseRecommendation(
  input: CourseRecommendationInput
): Promise<CourseRecommendationOutput> {
  try {
    const output = await getCourseRecommendations(input);
    return output;
  } catch (error) {
    console.error("Error getting course recommendations:", error);
    throw new Error("Failed to get course recommendations from AI.");
  }
}
