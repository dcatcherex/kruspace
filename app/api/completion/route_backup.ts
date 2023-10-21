// app/api/completion/route.ts

import { OpenAI } from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'

// export const runtime = 'edge'

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY!})


export async function POST(req: Request) {
  
  // Extract the `prompt` from the body of the request
  const { topic,grade,heading } = await req.json();
  console.log(topic,grade)

  // Check if any of the required properties are missing.
  if (!topic || !grade || !heading) {
    return {
      status: 400,
      body: 'Error: Missing one or more required properties: topic, grade, heading.'
    };
  }

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: false,

    messages: [
      {
        role: 'user',
        content: 'hello'
      },
      { role: 'system',
      
        content: 'please give a name to a cat '
  
      }
      ],
    max_tokens: 100,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  })


  console.log(response.choices[0])

  console.log("response is " + response)

  // Convert the response into a friendly text-stream
  // const stream = OpenAIStream(response)

  // Respond with the stream
  // return new StreamingTextResponse(response)
  
}


