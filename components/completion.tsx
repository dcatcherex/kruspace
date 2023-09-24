'use client'

import { useCompletion } from 'ai/react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"



export default function Completion() {
   const { completion, input, handleInputChange, handleSubmit } = useCompletion({
    api: '/api/completion'
  })

  return (
    <div className=''>
      <p className={completion ? 'border-2 border-sky-500 font-semibold p-2 rounded-md bg-sky-100 dark:bg-slate-900 h-[300px] overflow-y-auto' : ''} >{completion}</p>
      <form
      className='space-y-4' onSubmit={handleSubmit}>
        <Label htmlFor="input">
            Input a topic, or term with a learning level.
          <Input 
          placeholder='example: photosyntesis grade2'
          value={input} onChange={handleInputChange} />
        </Label>
        <Button
        className='w-full'
        type="submit">Generate Lesson Plan</Button>
      </form>
    </div>
  )
}