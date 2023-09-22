
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

  import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { useForm, SubmitHandler, FieldValues } from "react-hook-form"

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod';

import { topicSchema } from '@/app/validators/formvalidate'

type Input = z.infer<typeof topicSchema>

const ai = () => {
    const form = useForm<Input>({
        resolver: zodResolver(topicSchema),
        defaultValues:{
          topic: '',
          description: '',
        }
      })

      function onSubmit(values: z.infer<typeof topicSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
  return (
    <div>ai</div>
  )
}

export default ai