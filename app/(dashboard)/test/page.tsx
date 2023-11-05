import TestJson from "@/components/testJson"
import testData from "@/data/testJson.json"
import teaching from "@/data/teaching.json"
import DialogContainer from "@/components/library/dialog-container"
import TestCard from "@/components/testcard"
import CreateCard from "@/components/library/create-card"
import ChatCompanion from "@/components/chat/chat-companion"
import ChatCompanionContainer from "@/components/chat/chat-companion-container"



const page = () => {
  return (
    <section>
        {/* <TestJson data={teaching}/>
        {testData.length} */}
        {/* <CreateCard />
        <TestCard /> */}
        <ChatCompanionContainer />
    </section>
  )
}
export default page