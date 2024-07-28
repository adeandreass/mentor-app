"use client";
import {
  AdditionalFormProps,
  BioDataFormProps,
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
import MultipleFileUpload from "../FormInputs/MultipleFileUpload";
export type StepFormProps = {
  page: string;
  title: string;
  description: string;
};
export default function AdditionalInfo({
  page,
  title,
  description,
}: StepFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [dob, setDOB] = useState<Date>();
  const [additionalDocs, setAdditionalDocs] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AdditionalFormProps>();
  const router = useRouter();
  async function onSubmit(data: AdditionalFormProps) {
    data.page = page;
    console.log(data);
    // setIsLoading(true);
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
          <TextAreaInput
            label="Education History"
            register={register}
            name="educationHistory"
            errors={errors}
            placeholder="Enter your Education History"
          />
          <TextAreaInput
            label="Published Works or Research"
            register={register}
            name="research"
            errors={errors}
            placeholder="Enter any Published Works or Research"
          />
          <TextAreaInput
            label="Any special achievements or accomplishments"
            register={register}
            name="accomplishments"
            errors={errors}
            placeholder="Enter any special achievements or accomplishments"
          />
          <MultipleFileUpload
            label="any additional documents (CV, Sertifikat, etc.) Upload"
            files={additionalDocs}
            setFiles={setAdditionalDocs}
            endpoint="additionalDocs"
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
