"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  title: z.string().min(3, { message: "Too short" }),
  description: z.string().min(3, { message: "Too short" }),
  example: z.string(),
  media: z.string(),
});

const CreateCardForm = () => {
  //define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  //define submit
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast.success("Card created");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-4 pl-8"
      >
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex gap-2 text-base font-semibold">
                <div className="h-6 w-6 rounded-full bg-black text-center text-white">
                  1
                </div>
                {"เลือกหมวดหมู่ที่ต้องการ"}
              </FormLabel>
              <FormControl>
                <Input placeholder="หัวเรื่อง" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex gap-2 text-base font-semibold">
                <div className="h-6 w-6 rounded-full bg-black text-center text-white">
                  2
                </div>
                {"หัวเรื่อง"}
              </FormLabel>
              <FormControl>
                <Input placeholder="การเรียนร่วมเด็กพิเศษ" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex gap-2 text-base font-semibold">
                <div className="h-6 w-6 rounded-full bg-black text-center text-white">
                  3
                </div>
                {"รายละเอียด"}
              </FormLabel>
              <FormControl>
                <Textarea placeholder="แบ่งกลุ่มแยกเด็กพิเศษ..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="example"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex gap-2 text-base font-semibold">
                <div className="h-6 w-6 rounded-full bg-black text-center text-white">
                  4
                </div>
                {"ตัวอย่าง"}
              </FormLabel>
              <FormControl>
                <Textarea placeholder="แบ่งกลุ่มแยกเด็กพิเศษ..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="media"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex gap-2 text-base font-semibold">
                <div className="h-6 w-6 rounded-full bg-black text-center text-white">
                  5
                </div>
                {"สื่อต่าง ๆ"}
              </FormLabel>
              <FormControl>
                <Textarea placeholder="youtube web pdf..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className=" w-full">
          สร้างไอเดียการสอน
        </Button>
      </form>
    </Form>
  );
};
export default CreateCardForm;
