'use client'

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { useForm, SubmitHandler } from "react-hook-form"

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod';


const formSchema = z.object({
  topic: z.string().min(2,{
    message: 'Topic must be at least 2 characters long.',
  }).max(50,{
    message: 'Topic must be within than 50 characters long.',
  }),
})

const AiGenerate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <Tabs defaultValue="lessonplan" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="lessonplan">Lesson Plan</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
      </TabsList>
      <TabsContent value="lessonplan">
        <form onSubmit={handleSubmit(onSubmit)}>
          Input a topic, or term.
          <Input placeholder='Enter topic here (e.g."photosynthesis")' {...register('topic')} />
          <Button type="submit">Generate Lesson Plan</Button>
        </form>
      </TabsContent>
      <TabsContent value="activity">Change your password here.</TabsContent>
    </Tabs>
  )
}

export default AiGenerate