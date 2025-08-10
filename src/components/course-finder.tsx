"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2, Sparkles, AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { CourseRecommendationOutput } from "@/ai/flows/course-recommendation";
import { handleCourseRecommendation } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  academicBackground: z
    .string()
    .min(20, { message: "Please provide more details about your academic background." })
    .max(500, { message: "Please keep your background under 500 characters." }),
  interests: z
    .string()
    .min(10, { message: "Please tell us more about your interests." })
    .max(500, { message: "Please keep your interests under 500 characters." }),
});

export function CourseFinder() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CourseRecommendationOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      academicBackground: "",
      interests: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    try {
      const recommendation = await handleCourseRecommendation(values);
      setResult(recommendation);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Failed to get recommendations. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="academicBackground"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Academic Background</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Completed 12th grade with a focus on Physics, Chemistry, and Math. Scored 85%..."
                      {...field}
                      rows={4}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="interests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Interests & Career Goals</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Passionate about building software, interested in artificial intelligence, and aspire to be a machine learning engineer..."
                      {...field}
                      rows={4}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading} className="w-full" style={{ backgroundColor: "var(--accent)" }}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Finding Courses...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Get Recommendations
                </>
              )}
            </Button>
          </form>
        </Form>
        {result && (
          <div className="mt-8">
            <Card className="bg-secondary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-accent" />
                  Your Personalized Recommendations
                </CardTitle>
                <CardDescription>
                  Based on your profile, we recommend the following courses:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">Recommended Courses:</h4>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    {result.recommendedCourses.map((course) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Reasoning:</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{result.reasoning}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
