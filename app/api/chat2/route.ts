import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from 'ai';

import { useChatStore } from "@/stores/chat";

// export const runtime = 'edge';


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
  });
export async function POST(req: Request) {
  const { aiModel } = useChatStore.getState();
  const { data } = await req.json();

  const prompt = "You are a friendly and helpful instructional coach helping teachers plan a lesson."
  const prompt2 = "You are a friendly and helpful assistant named Bob."


  const response = await openai.chat.completions.create({
    model: aiModel,
    messages: [
      {
        "role": "system",
        "content":prompt2,
      },
      {
        "role": "user",
        "content":
          data,
      },
    ],
    stream: true,
  });

// output the response
//   console.log(response.choices[0]);

// output the stream response
for await (const chunk of response) {
    console.log(chunk.choices[0].delta.content);
  }

    // // Convert the response into a friendly text-stream
    // const stream = OpenAIStream(response);
 
    // // Respond with the stream
    // return new StreamingTextResponse(stream);
}

