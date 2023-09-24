// app/api/completion/route.ts

import { OpenAI } from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'

export const runtime = 'edge'

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY!})



function buildPrompt(prompt: string) {
  return prompt.split('\n').map((message) => ({
    role: 'user',
    content: message,
  })).concat({
    role: 'system',
    content: 'You are a friendly and helpful instructional coach helping teachers plan a lesson. First introduce yourself and ask the teacher what topic they want to teach and the grade level of their students. Wait for the teacher to respond. Do not move on until the teacher responds. ' ,
  });
}

function newPrompt(prompt:string) {
  return ([
  {
    role: 'system',
    content: 'You are a friendly and helpful instructional coach helping teachers plan a lesson.',
  },
  {
    role: 'user',
    content: prompt
  },
  { role: 'system',
    // content: 'understand the user prompt?'
  
    content: 'Given all of this information, create a customized lesson plan that includes a variety of teaching techniques and modalities including direct instruction, checking for understanding (including gathering evidence of understanding from a wide sampling of students), discussion, an engaging in-class activity, and an assignment. Explain why you are specifically choosing each. '
  }
])}

export async function POST(req: Request) {
  
  // Extract the `prompt` from the body of the request
  const { prompt } = await req.json();
  console.log(prompt)

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: newPrompt(prompt),
    // messages: buildPrompt(prompt),
    max_tokens: 900,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  })

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)

  // Respond with the stream
  return new StreamingTextResponse(stream)
}
