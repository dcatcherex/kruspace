"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";


//Schema for the form
const formSchema = z.object({
  topic: z.string().min(2, {
    message: "Topic must be at least 2 characters.",
  }),
  grade: z.string().min(2),
  detail: z.string(),
});

export function FormSubmit() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
      grade: "grade2",
      detail: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>1. Input a topic, or term.</FormLabel>
              <FormControl>
                <Input
                  placeholder='Enter topic here (e.g."photosynthesis")'
                  {...field}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="grade"
          render={({ field }) => (
            <FormItem>
              <FormLabel>2. Choose a learning level:</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={"2nd grade"}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Grade" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {[
                    "1st grade",
                    "2nd grade",
                    "3rd grade",
                    "4th grade",
                    "5th grade",
                    "6th grade",
                  ].map((grade) => {
                    return (
                      <SelectItem value={grade} key={grade}>
                        {grade}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="detail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>3. (optional) details</FormLabel>
              <FormControl>
                <Input placeholder="detail" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Generate Lesson Plan
        </Button>
        <div className="flex justify-center">
          <p className="-mt-4 text-sm text-slate-500">
            Already generated: 
          </p>
        </div>
      </form>
    </Form>
  );
}
