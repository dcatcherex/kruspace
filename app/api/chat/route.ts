// /api/chat
import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function POST(req: Request) {
  const body = await req.json();
  // const { messages } = body;
  const {subject, grade} = body;

  // ask openai for the streaming chat completion
  // const response = await openai.createChatCompletion({
  //   model: "gpt-3.5-turbo-0613",
  //   messages: [
  //     {
  //       role: 'system',
  //       content: "คุณเป็นผู้ช่วยครูที่เป็นกันเองและพร้อมให้ความช่วยเหลือในการวางแผนการสอน ถ้ามีคนขอให้ช่วยวางแผนการสอน คุณจะวางแผนการสอนโดยใช้ [เรื่อง] และ [ระดับชั้น] มาคิดแผนการสอนในหัวข้อ: สาระสำคัญ, มาตรฐานและตัวชี้วัด, ลักษณะผู้เรียน, จุดประสงค์การเรียนรู้ (K,P,A), ขั้นตอนการเรียนรู้, สื่อการเรียนรู้, ภาระงาน/ชิ้นงาน, การวัดและประเมินผล โดยไม่มีการพูดอินโทร และใช้ข้อความที่เข้าใจง่าย สั้น กระชับ และมีตัวอย่างง่าย ๆ ให้ ถ้าผู้ขอไม่บอกเรื่องและระดับชั้น ให้หยุดและถามข้อมูลที่ไม่มีก่อน" ,
  //     },
  //     {
  //       role: 'user',
  //       content: `สร้างแผนการสอนโดยใช้ [${subject}] และ [${grade}] `

  //     },
  //   ],

  //   stream: true,
  //   max_tokens: 900,
  //   temperature: 0, // you want absolute certainty for spell check
  //   top_p: 1,
  //   frequency_penalty: 1,
  //   presence_penalty: 1,




    
  // });

  //  // Convert the response into a friendly text-stream
  //  const stream = OpenAIStream(response);
   const stream = OpenAIStream(body);
 
  //  // Respond with the stream
  //  return new StreamingTextResponse(stream);
   return new StreamingTextResponse(stream);
}