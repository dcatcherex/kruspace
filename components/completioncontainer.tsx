import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

 import  Completion from "@/components/completion"


const CompletionContainer = () => {
  return (
    <section className="space-y-6 pb-8  md:pb-12 md: lg:">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Tabs defaultValue="lessonplan" className="max-w-[800px]">
          <TabsList>
            <TabsTrigger value="lessonplan">Lesson Plan</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>
          <TabsContent value="lessonplan">
            <Card>
              <CardHeader>
                <CardTitle>Lesson Plan</CardTitle>
                <CardDescription>Base on &quot;Teaching with AI&quot; by OpenAI in collaboration with Ethan Mollick and Lilach Mollick</CardDescription>
              </CardHeader>
              <CardContent className="text-left">
                <Completion />
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>
        
          </TabsContent>
          <TabsContent value="activity">Coming Soon</TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default CompletionContainer