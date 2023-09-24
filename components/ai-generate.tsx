"use client";

import {useCompletion} from 'ai/react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { topicSchema } from "@/app/validators/formvalidate";
import { useState } from "react";

type Input = z.infer<typeof topicSchema>;

const AiGenerate = () => {
  const {completion,input,stop,isLoading,handleInputChange,handleSubmit} = useCompletion({
    api: '/api/completion',
    onResponse: res => {
      // trigger something when the response starts streaming in
      // e.g. if the user is rate limited, you can show a toast
      if (res.status === 429) {
        // toast({
        //   title: "Error",
        //   description: "You are being rate limited. Please try again later.",
        // })
        console.log('error')
      
      }
    },
    onFinish: () => {
      // do something with the completion result
      // toast({
      //   title: "Successfull",
      //   description: "Successfully generated lesson plan!",
      // })
      console.log('finish')
    
    },
  })

  // const handleInputChange = useDebouncedCallback(e => {
  //   complete(e.target.value);
  // }, 500);

  const [time, setTime] = useState(0);

 

  const form = useForm<Input>({
    resolver: zodResolver(topicSchema),
    defaultValues: {
      topic: "",
      description: "",
      grade: "2nd grade",
    },
  });

  function onSubmit(values: z.infer<typeof topicSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
 
    
  // }


  return (
    <section className="space-y-6 pb-8  md:pb-12 md: lg:">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Tabs defaultValue="lessonplan" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="lessonplan">Lesson Plan</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>
          <TabsContent value="lessonplan">
            <Card>
              <CardHeader>
                <CardTitle>Lesson Plan</CardTitle>
                <CardDescription>Base on &quot;Teaching with AI&quot; by OpenAI in collaboration with Ethan Mollick and Lilach Mollick</CardDescription>
              </CardHeader>
              <CardContent className="text-left">
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
                          placeholder='Enter topic here (e.g.&quot;photosynthesis&quot;)'
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
        
                      </FormDescription>
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
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={"2nd grade"}
                      >
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
                <Button className="w-full" type="submit" >Generate Lesson Plan</Button>
                <div className="flex justify-center">
                  <p className="-mt-4 text-sm text-slate-500">Already generated: {time}</p>
                </div>
              </form>
            </Form>
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>
        
          </TabsContent>
          <TabsContent value="activity">Coming Soon</TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
export default AiGenerate;
