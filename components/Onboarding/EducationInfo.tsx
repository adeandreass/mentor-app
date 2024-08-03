"use client";
import {
  BioDataFormProps,
  EducationFormProps,
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
import SelectInput from "../FormInputs/SelectInput";
import ArrayItemsInput from "../FormInputs/ArrayInput";
import MultipleImageInput from "../FormInputs/MultipleImageInput";
import MultipleFileUpload from "../FormInputs/MultipleFileUpload";
import { updateTeacherProfile } from "@/actions/onboarding";

export default function EducationInfo({
  page,
  title,
  description,
  formId,
  userId,
  nextPage,
}: StepFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const specialties = [
    { value: "Matematika", label: "Matematika" },
    { value: "Fisika", label: "Fisika" },
    { value: "Kimia", label: "Kimia" },
    { value: "Biologi", label: "Biologi" },
    { value: "Ekonomi", label: "Ekonomi" },
  ];

  const [otherSpecalities, setOtherSpecalities] = useState([]);
  const [docs, setDocs] = useState([
    {
      url: "https://utfs.io/f/a1d328da-1011-487a-a03a-4a132f4bf23f-z4iomy.pdf",
      title:
        "GEMASTIK XVII Perangkat Lunak - GEMASTIK24-115424925 - Computatrum - LearnMate - Proposal.pdf",
      size: 1017285,
    },
    {
      url: "https://utfs.io/f/b18f4750-d291-4ea5-8f28-e2d084e0459f-u2i50c.pdf",
      title: "pedoman gemastik 2024-966690 (1).pdf",
      size: 1393840,
    },
  ]);

  console.log(docs);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EducationFormProps>();
  const router = useRouter();
  async function onSubmit(data: EducationFormProps) {
    data.page = page;
    data.otherSpecalities = otherSpecalities;
    data.boardCertificates = docs.map((doc) => doc.url);
    console.log(data);
    setIsLoading(true);
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
            label="Education School"
            register={register}
            name="educationSchool"
            errors={errors}
            placeholder="Enter Education School"
          />
          <TextInput
            label="Graduation Year"
            register={register}
            type="number"
            name="graduationYear"
            errors={errors}
            placeholder="Enter Graduation Year"
            className="col-span-full sm:col-span-1"
          />
          <SelectInput
            label="Select Your Primary Subject"
            name="primarySpecalization"
            register={register}
            className="col-span-full sm:col-span-1"
            options={specialties}
            multiple={false}
          />
          <ArrayItemsInput
            setItems={setOtherSpecalities}
            items={otherSpecalities}
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
