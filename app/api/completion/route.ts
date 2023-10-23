import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// Set the runtime to edge for best performance
export const runtime = 'edge';

export async function POST(req: Request) {
  const { topic, grade } = await req.json();
  console.log('topic=' + topic)
  console.log('grade=' + grade)

  // Ask OpenAI for a streaming completion given the prompt
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        role: 'system',
        content: "You are a friendly and helpful instructional coach helping teachers plan a lesson.When you have a request to generate or create a lesson plan you only respond with json format only.",
      },
      {
        role: 'user',
        content: `สร้างแผนการสอนเรื่อง [พืช] สำหรับชั้น [ประถม3] ที่ผสมผสานเทคนิคการสอน และวิธีการที่หลากหลาย โดยอยู่ในรูปแบบ json file โดยมีหัวข้อ:เรื่อง, ระดับชั้น, สาระสำคัญ, มาตรฐานและตัวชี้วัด, ลักษณะผู้เรียน, จุดประสงค์การเรียนรู้ (K,P,A), ขั้นตอนการเรียนรู้, การเรียนรู้, ภาระงาน/ชิ้นงาน, การวัดและประเมินผล`,
      },
      // {
      //   role: 'assistant',
      //   content: `{
      //     "เรื่อง": "พืช",
      //     "ระดับชั้น": "ประถมปีที่3"
      //     "สาระสำคัญ": [
      //       "การรู้จักพืชต่างๆ",
      //       "กระบวนการเจริญเติบโตของพืช",
      //       "ผลกระทบของสิ่งแวดล้อมต่อพืช"
      //     ],
      //     "มาตรฐานและตัวชี้วัด": [
      //       "เข้าใจความหมายของคำศัพท์ที่เกี่ยวข้องกับพืช",
      //       "สามารถอธิบายกระบวนการเจริญเติบโตของพืชได้",
      //       "สามารถวิเคราะห์ผลกระทบของสิ่งแวดล้อมต่อพืชได้"
      //     ],
      //     "ลักษณะผู้เรียน": [
      //       "เด็กชั้นป.3",
      //       "มีความสนใจในธรรมชาติและพืช"
      //     ],
      //     "จุดประสงค์การเรียนรู้ (K,P,A)": [
      //       "K: เข้าใจความหมายของคำศัพท์เกี่ยวกับพืช",
      //       "P: อธิบายกระบวนการเจริญเติบโตของพืชได้",
      //       "A: วิเคราะห์ผลกระทบของสิ่งแวดล้อมต่อพืชได้"
      //     ],
      //     "ขั้นตอนการเรียนรู้": [
      //       "ศึกษาเนื้อหาที่เกี่ยวข้องกับพืช",
      //       "สำรวจและสังเกตพืชในสิ่งแวดล้อม",
      //       "อธิบายกระบวนการเจริญเติบโตของพืช",
      //       "วิเคราะห์ผลกระทบของสิ่งแวดล้อมต่อพืช"
      //     ],
      //     "สื่อการเรียนรู้": [
      //       "หนังสือเรียน",
      //       "ภาพถ่ายของพืช",
      //       "โมเดลจำลองของกระบวนการเจริญเติบโตของพืช"
      //     ],
      //     "ภาระงาน/ชิ้นงาน": [
      //       "ทำแบบทดสอบความเข้าใจเกี่ยวกับพืช",
      //       "เขียนรายงานการสำรวจและสังเกตพืชในสิ่งแวดล้อม",
      //       "เขียนคำอธิบายกระบวนการเจริญเติบโตของพืช",
      //       "เขียนรายงานการวิเคราะห์ผลกระทบของสิ่งแวดล้อมต่อพืช"
      //     ],
      //     "การวัดและประเมินผล": [
      //       "แบบทดสอบความรู้",
      //       "การสังเกตการกระทำของผู้เรียนในขั้นตอนการเรียนรู้",
      //       "เกรด/การประเมินความสำเร็จในภาระงาน/ชิ้นงาน"
      //     ]
      //   }`,
      // },
    ],
    max_tokens: 1500,
    temperature: 0, // you want absolute certainty for spell check
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
    // functions:[
    //   {
    //   name: "create a lesson plan",
    //   description:
    //     "create lesson plan in these topic and structure that connect with the topic and the grade",
    //   parameters: {
    //     type: "object",
    //     properties: {
    //       สาระสำคัญ: {
    //         type: "string",
    //         description: "ความคิดหลักหรือความรู้ที่นักเรียนต้องเข้าใจและเรียนรู้ในระหว่างบทเรียน",
    //       },
    //       มาตรฐานและตัวชี้วัด: {
    //           type:"string",
    //           description: "เป้าหมายการเรียนรู้ที่สอดคล้องกับตัวชี้วัดที่ใช้วัดผลสำเร็จของนักเรียน"
    //       },
    //       ลักษณะผู้เรียน: {
    //           type:"string",
    //           description: "ลักษณะเฉพาะของผู้เรียน เช่น ความสามารถ และสไตล์การเรียนรู้"
    //       },
    //       จุดประสงค์การเรียนรู้: {
    //           type:"string",
    //           description: "จุดประสงค์การเรียนรู้ที่แบ่งเป็น ความรู้ (K), กระบวนการ (P), และการประยุกต์ใช้ (A) เพื่อแสดงว่านักเรียนควรรู้อะไร เข้าใจอย่างไร หรือสามารถประยุกต์ใช้ได้อย่างไรหลังจากเรียนบทเรียนนี้"
    //       },
    //       ขั้นตอนการเรียนรู้: {
    //           type:"string",
    //           description: "ขั้นตอนและกลยุทธ์ที่ใช้ในการส่งเสริมกระบวนการเรียนรู้ของนักเรียน"
    //       },
    //       สื่อการเรียนรู้: {
    //           type:"string",
    //           description: "วัสดุและเครื่องมือที่ใช้สนับสนุนกระบวนการเรียนรู้ของนักเรียน"
    //       },
    //       ภาระงาน: {
    //           type:"string",
    //           description: "งานหรือการทำภารกิจที่มอบให้กับนักเรียนเพื่อเสริมสร้างการเรียนรู้และประเมินความเข้าใจของพวกเขา"
    //       },
    //       การวัดและประเมินผล: {
    //           type:"string",
    //           description: "วิธีและเครื่องมือที่ใช้วัดความก้าวหน้าและผลสำเร็จของนักเรียน"
    //       },
    //       การให้คะแนนและประเมินผล: {
    //           type:"string",
    //           description: "เกณฑ์ที่ใช้ประเมินงานของนักเรียนและให้คะแนนหรือคำแนะนำตามผลงานของพวกเขา"
    //       },
    //     },
    //     required: ["เรื่อง","ระดับชั้น"],
    //   },
    // },],function_call:"auto"
  });

  console.log('response='+ JSON.stringify(response))

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}