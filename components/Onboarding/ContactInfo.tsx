"use client";
import {
  BioDataFormProps,
  ContactFormProps,
  type RegisterInputProps,
} from "@/types/types";
import Link from "next/link";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { useState } from "react";
import { createUser } from "@/actions/users";
import { UserRole } from "@prisma/client";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { DatePickerInput } from "../FormInputs/DatePickerInput";
import { TextAreaInput } from "../FormInputs/TextAreaInput";
import RadioInput from "../FormInputs/RadioInput";
import ImageInput from "../FormInputs/ImageInput";
import { StepFormProps } from "./BioDataForm";
import { updateTeacherProfile } from "@/actions/onboarding";

export default function ContactInfo({
  page,
  title,
  description,
  formId,
  userId,
  nextPage,
}: StepFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [dob, setDOB] = useState<Date>();
  const [expiry, setExpiry] = useState<Date>();
  const [profileImage, setProfileImage] = useState(
    "https://utfs.io/f/acf62ede-cc6c-4797-b0ee-3fae55d8d844-3vabb.png"
  );
  const genderOptions = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
  ];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormProps>();
  const router = useRouter();
  async function onSubmit(data: ContactFormProps) {
    setIsLoading(true);
    data.page = page;
    console.log(data);

    try {
      const res = await updateTeacherProfile(formId, data);
      if (res?.status === 201) {
        setIsLoading(false);
        router.push(`/onboarding/${userId}?page=${nextPage}`);
        console.log(res.data);
      } else {
        setIsLoading(false);
        throw new Error("Something went wrong");
      }
    } catch (error) {
      setIsLoading(false);
    }
  }
  return (
    <div className="w-full">
      <div className="text-center border-b border-gray-200 pb-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">
          {title}
        </h1>
        <p className="text-balance text-muted-foreground">{description}</p>
      </div>
      <form className=" py-4 px-4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 grid-cols-2">
          <TextInput
            label="Email"
            register={register}
            name="email"
            errors={errors}
            placeholder="Email"
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label="Phone Number"
            register={register}
            name="phone"
            errors={errors}
            placeholder="Phone Number"
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label="Country"
            register={register}
            name="country"
            errors={errors}
            placeholder="Country"
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label="City"
            register={register}
            name="city"
            errors={errors}
            placeholder="City"
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label="State"
            register={register}
            name="state"
            errors={errors}
            placeholder="State"
            className="col-span-full sm:col-span-1"
          />
        </div>
        <div className="mt-8 flex justify-center items-center">
          <SubmitButton
            title="Simpan dan Lanjutkan"
            isLoading={isLoading}
            loadingTitle="Menyimpan silahkan tunggu..."
          />
        </div>
      </form>
    </div>
  );
}
