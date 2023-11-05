import ChatChar from "./chat-char";
import ChatChip from "./chat-chip";
import ChatInput from "./chat-input";
import ChatLeftPanel from "./chat-left-panel";
import ChatPrompt from "./chat-prompt";
import ChatTopMenu from "./chat-top-menu";

const ChatContainer = () => {
  return (
    <section className="w-full">
      <div className="flex ">
        {/* <div className="min-w-[200px]">
            <ChatLeftPanel />
        </div> */}
        <div className="mx-auto w-full px-2">
          <div className="mb-10 pr-9">
            <ChatTopMenu />
          </div>
          <div className="mx-auto min-h-[600px] max-w-[800px]">
            <ChatChar />
          </div>
          <div className="mb-2 text-center">
            <ChatChip />
          </div>
          <div className="mx-2 mb-4 ">
            <ChatInput />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ChatContainer;
