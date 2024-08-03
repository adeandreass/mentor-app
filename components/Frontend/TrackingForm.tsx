"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { HiInformationCircle } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";
// import { updateUserById } from "@/actions/users";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { updateUserById } from "@/actions/users";
import SubmitButton from "../FormInputs/SubmitButton";
import { UserRole } from "@prisma/client";
import { Input } from "../ui/input";
import Link from "next/link";
import { getApplicationByTrack } from "@/actions/onboarding";
import { Alert } from "flowbite-react";

const FormSchema = z.object({
  token: z.string().min(6, {
    message: "Your Token must be 6 characters.",
  }),
});

export default function TrackingForm({
  userToken,
  id,
  role,
}: {
  userToken: number | undefined;
  id: string;
  role: UserRole | undefined;
}) {
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const router = useRouter();
  const FormSchema = z.object({
    trackingNumber: z.string().min(2, {
      message: "Username must be at least 10 characters.",
    }),
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      trackingNumber: "",
    },
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    try {
      const res = await getApplicationByTrack(data.trackingNumber);
      if (res?.status === 404) {
        setShowNotification(true);
        setLoading(false);
      }
      if (res?.status === 200) {
        toast.success("Redirecting you");
        // setUserId(res.data?.userId!);
        // setPage(res.data?.page!);
        // setTrackingSuccesfull(true);
        setLoading(false);
        router.push(`/onboarding/${res.data?.userId}?page=${res.data?.page}`);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong, try again");
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      {showNotification && (
        <Alert color="failure" icon={HiInformationCircle}>
          <span className="font-medium">Wrong Tracking Number!</span> Please
          Check the token number and Enter again
        </Alert>
      )}

      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="trackingNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="eg VX5PNQ89KO" {...field} />
              </FormControl>
              <FormDescription>
                {/* This is your public display name. */}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <SubmitButton
          title="Submit to Resume"
          isLoading={loading}
          loadingTitle="Fetching please wait..."
        />
      </form>
    </Form>
  );
}
