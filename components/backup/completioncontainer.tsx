import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { NewspaperIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Completion from "@/components/completion";

const CompletionContainer = () => {
  return (
    <section className="space-y-6 pb-8  md:pb-12 md: lg:">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Tabs defaultValue="lessonplan" className="max-w-[800px]">
          <TabsList>
            <TabsTrigger value="lessonplan">
              <NewspaperIcon className="w-5 h-5 mr-1 stroke-muted-foreground stroke-2" />
              แผนการสอน
            </TabsTrigger>
            <TabsTrigger value="activity">กิจกรรม</TabsTrigger>
            <TabsTrigger value="iep">เด็กพิเศษ</TabsTrigger>
          </TabsList>
          <TabsContent value="lessonplan">
            <Card>
              <CardHeader>
                <CardTitle>แผนการสอน</CardTitle>
                <CardDescription>
                  Base on &quot;Teaching with AI&quot; by OpenAI in
                  collaboration with Ethan Mollick and Lilach Mollick
                  https://openai.com/blog/teaching-with-ai
                </CardDescription>
              </CardHeader>
              <CardContent className="text-left">
                {/* ai generate */}
                <Completion />
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="activity">Coming Soon</TabsContent>
          <TabsContent value="iep">Coming Soon</TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CompletionContainer;
