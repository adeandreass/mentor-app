"use client";
import { BioDataFormProps, EducationFormProps, type RegisterInputProps } from "@/types/types";
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
import SelectInput from "../FormInputs/SelectInput";
import ArrayItemsInput from "../FormInputs/ArrayInput";
import MultipleImageInput from "../FormInputs/MultipleImageInput";
import MultipleFileUpload from "../FormInputs/MultipleFileUpload";

export default function EducationInfo({
  page,
  title,
  description,
}: StepFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [dob, setDOB] = useState<Date>();
  const [expiry, setExpiry] = useState<Date>();
  const primarySubject = [
    { value: "Matematika", label: "Matematika" },
    { value: "Fisika", label: "Fisika" },
    { value: "Kimia", label: "Kimia" },
    { value: "Biologi", label: "Biologi" },
    { value: "Ekonomi", label: "Ekonomi" },
  ];

  const [secondarySubject, setSecondarySubject] = useState([]);
  const [docs, setDocs] = useState([]);

  console.log(docs);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EducationFormProps>();
  const router = useRouter();
  async function onSubmit(data: EducationFormProps) {
    if (!dob) {
      toast.error("Tanggal Lahir wajib diisi");
      return;
    }
    if (!expiry) {
      toast.error("Tanggal Kadaluwarsa wajib diisi");
      return;
    }
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
          <TextInput
            label="Education School"
            register={register}
            name="educationSchool"
            errors={errors}
            placeholder="Enter Education School"
          />
          <TextInput
            label="Graduation Year"
            register={register}
            name="graduationYear"
            errors={errors}
            placeholder="Enter Graduation Year"
            className="col-span-full sm:col-span-1"
          />
          <SelectInput
            label="Select Your Primary Subject"
            name="primarySubject"
            register={register}
            className="col-span-full sm:col-span-1"
            options={primarySubject}
            multiple={false}
          />
          <ArrayItemsInput
            setItems={setSecondarySubject}
            items={secondarySubject}
            itemTitle="Subject"
          />
          <MultipleFileUpload
            label="Upload your academic documents (Max of 4 docs)"
            files={docs}
            setFiles={setDocs}
            endpoint="teacherProfessionDocs"
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
