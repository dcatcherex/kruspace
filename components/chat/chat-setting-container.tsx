import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


import ChatSetting from "./chat-setting";
import ChatSettingGeneral from "./chat-setting-general";
import ChatSettingStyle from "./chat-setting-style";


const ChatSettingContainer = () => {
  return (
    <div>
      <Tabs defaultValue="settings" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="styles">Styles</TabsTrigger>
        </TabsList>
        <TabsContent value="settings">
          <ChatSetting />
        </TabsContent>
        <TabsContent value="general">
          <ChatSettingGeneral />
        </TabsContent>
        <TabsContent value="styles">
          <ChatSettingStyle />
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default ChatSettingContainer;
