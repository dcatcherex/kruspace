import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
 
export const runtime = 'edge';
 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
 
export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { topic, grade } = await req.json();
 
  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    // a precise prompt is important for the AI to reply with the correct tokens
    messages: [
      {
        role: 'system',
        content: `say what ${topic} and ${grade}`
        // content: `You are a friendly and helpful instructional coach helping teachers plan a lesson. The teacher wants to teach ${topic} for students in ${grade}. So help the teacher create a customized lesson plan that includes a variety of teaching techniques and modalities including direct instruction, checking for understanding (including gathering evidence of understanding from a wide sampling of students), discussion, an engaging in-class activity, and an assignment. Explain why you are specifically choosing each.`,
      },
    ],
    max_tokens: 10,
    temperature: 0, // you want absolute certainty for spell check
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });
 
  const stream = OpenAIStream(response);
 
  return new StreamingTextResponse(stream);
}