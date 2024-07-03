"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast, useToast } from "@/components/ui/use-toast"
import { Trash2, Upload, UploadIcon } from "lucide-react"

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function Userdata() {
    const { toast } = useToast()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div className="p-4 border rounded my-4">
        <h1>Profile</h1>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
            <FormItem>
                <FormLabel>Picture</FormLabel>
                <div className="flex gap-[20px]">
                <div>
                    <Button variant="ghost" className="bg-black/[0.2] h-[60px] w-[60px] p-2">
                    <UploadIcon></UploadIcon></Button>
                </div>
                <div>
                    <div className="flex gap-[20px]">
                    <Input id="picture" type="file" className="w-max-[100px]" />
                    <Button variant="ghost" className="flex gap-[10px]"><Trash2 />Remove</Button>
                    </div>
                    <FormDescription className="text-xs mt-2">We support your best PNGs, JPEGs and GIFs portraits under 10MB</FormDescription>
                </div>
                </div>
            </FormItem>
            
            <div className="flex flex-col gap-[10px]">
            <FormLabel className="mb-0">Name</FormLabel>
            <FormDescription>
                    Your name as it will be displayed
            </FormDescription>
                <div className="flex justify-between items-start gap-[20px]">
                <FormItem className="flex flex-col items-start justify-center">
                
                <FormLabel className="text-xs text-stone-950/[0.3]">First Name</FormLabel>
                <FormControl>
                    
                    <Input value="Noah" disabled className="bg-neutral-900/[0.2] mt-[0px]"/>
                </FormControl>
                
                
                </FormItem>
                <FormItem className="flex flex-col items-start justify-center">
                <FormLabel className="text-xs text-stone-950/[0.3]">Last Name</FormLabel>
                <FormControl>
                    
                    <Input value="A" disabled className="bg-neutral-900/[0.2] mt-[0px]"/>
                </FormControl>
                
                
                </FormItem>
                </div>
            </div>
            <FormItem>
                <FormLabel>Email</FormLabel>
                <FormDescription>The email associated to your account</FormDescription>
                <FormControl>
                    <Input value="noah@demo.dev" disabled className="bg-neutral-900/[0.2] mt-[0px] max-w-full"/>
                </FormControl>
            </FormItem>

            <FormItem>
                <FormLabel>
                    Change Password
                </FormLabel>
                <FormDescription>Receieve an email containing password update link</FormDescription>
                <Button
                variant="outline"
                onClick={() => {
                    toast({
                    description: "Success, Password reset link has been sent",
                    })
                }}
                >
                Change Password
                </Button>
            </FormItem>
            <FormItem>
                <FormLabel>
                    Danger zone
                </FormLabel>
                <FormDescription>Delete account and all the associated data</FormDescription>
                <Button variant="outline" className="border-red-700 text-red-700">Delete Account</Button>
            </FormItem>
      </form>
    </Form>
    </div>
  )
}
