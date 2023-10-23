import { CompletionCreateParams } from "openai/resources/chat/index";

export const functions: CompletionCreateParams.Function[] = [
  {
    name: "output_lesson_plan",
    description:
      "Output the lesson plan structure to be display and print beautifully",
    parameters: {
      type: "object",
      properties: {
        key_concept: {
          type: "string",
          description: "The main ideas or principles that students need to understand and learn during the lesson.",
        },
        standard: {
            type:"string",
            description: "The educational standards or learning objectives that the lesson is aligned with, and the specific measures or indicators used to assess student achievement."
        },
        learner_characteristic: {
            type:"string",
            description: "The unique characteristics, abilities, and learning styles of the students in the classroom."
        },
        learning_objectives: {
            type:"string",
            description: "Knowledge (K), Process (P), and Application (A) objectives that specify what students should know, be able to do, or apply after completing the lesson."
        },
        learning_process: {
            type:"string",
            description: "The step-by-step procedures and strategies used to facilitate student learning, including instructional methods, activities, and interactions."
        },
        learning_resource: {
            type:"string",
            description: "The instructional materials, tools, and technology used to support student learning, such as textbooks, worksheets, multimedia presentations, or online resources."
        },
        assignment: {
            type:"string",
            description: "The tasks or assignments given to students to complete during or after the lesson to reinforce learning and assess their understanding."
        },
        assessment: {
            type:"string",
            description: "The methods and tools used to measure student progress and achievement, including formative assessments, tests, projects, or observations."
        },
        grading: {
            type:"string",
            description: "The criteria and rubrics used to evaluate student work and assign grades or marks based on their performance."
        },
      },
      required: ["key_concept","standard","learner_characteristic","learning_objectives","learning_process","learning_resource","assignment","assessment","grading"],
    },
  },
  ... // more functions
];

async function get_top_stories(limit: number = 10) {
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json",
  );
  const ids = await response.json();
  const stories = await Promise.all(
    ids.slice(0, limit).map((id: number) => get_story(id)),
  );
  return stories;
}

export async function runFunction(name: string, args: any) {
  switch (name) {
    case "get_top_stories":
      return await get_top_stories();
     ... // more functions
  }
}