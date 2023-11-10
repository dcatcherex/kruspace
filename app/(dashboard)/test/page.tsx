import TestJson from "@/components/testJson"
import testData from "@/data/testJson.json"
import teaching from "@/data/teaching.json"
import DialogContainer from "@/components/library/dialog-container"
import TestCard from "@/components/testcard"
import CreateCard from "@/components/library/create-card"
import ChatCompanion from "@/components/chat/chat-companion"
import ChatCompanionContainer from "@/components/chat/chat-companion-container"
import ChatContainer from "@/components/chat/chat-container"
import ChatTopMenu from "@/components/chat/chat-top-menu"
import ChatInput from "@/components/chat/chat-input"



const page = () => {
  return (
    <section className="container bg-slate-100 min-h-screen">
        {/* <TestJson data={teaching}/>
        {testData.length} */}
        {/* <CreateCard />
        <TestCard /> */}
        <ChatContainer />
        {/* <ChatTopMenu /> */}
        {/* <ChatInput /> */}
    </section>
  )
}
export default page