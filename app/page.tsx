
import SectionHero from "@/components/section/section-hero"
import SectionFeature from "@/components/section/section-feature"
import AiGenerate from "@/components/ai-generate"
import AiChat from "@/components/ai-chat"
import AiCompletion from "@/components/ai-completion"
import Formcontainer from "@/components/formcontainer"
import { FormSubmit } from "@/components/formsubmit"
import { Form } from "react-hook-form"
import Completion from "@/components/completion"
import CompletionContainer from "@/components/completioncontainer"
import SectionStat from "@/components/section/section-stat"


export default function IndexPage() {

  return (
    <>
      
          <SectionHero />
          {/* <AiGenerate /> */}
          {/* <AiChat /> */}
          {/* <AiCompletion /> */}
          <CompletionContainer />
          <SectionFeature />
          <SectionStat />
    
      



    </>
  )
}