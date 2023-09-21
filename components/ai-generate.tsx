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

const AiGenerate = () => {
  return (
    <Tabs defaultValue="lessonplan" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="lessonplan">Lesson Plan</TabsTrigger>
    <TabsTrigger value="activity">Activity</TabsTrigger>
  </TabsList>
  <TabsContent value="lessonplan">Make changes to your account here.
    <Button>Generate Lesson Plan</Button>
  </TabsContent>
  <TabsContent value="activity">Change your password here.</TabsContent>
</Tabs>
  )
}

export default AiGenerate