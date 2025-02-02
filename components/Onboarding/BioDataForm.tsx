"use client";
import { BioDataFormProps, type RegisterInputProps } from "@/types/types";
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
import { generateTrackingNumber } from "@/lib/generateTracking";
import { createTeacherProfile } from "@/actions/onboarding";
import { useOnboardingContext } from "@/context/context";
export type StepFormProps = {
  page: string;
  title: string;
  description: string;
  userId?: string;
  nextPage?: string;
  formId?: string;
};
export default function BioDataForm({
  page,
  title,
  description,
  userId,
  nextPage,
  formId = "",
}: StepFormProps) {
  const {
    truckingNumber,
    setTruckingNumber,
    teacherProfileId,
    setTeacherProfileId,
  } = useOnboardingContext();
  console.log(truckingNumber, teacherProfileId);
  const [isLoading, setIsLoading] = useState(false);
  const [dob, setDOB] = useState<Date>();

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
  } = useForm<BioDataFormProps>();
  const router = useRouter();
  async function onSubmit(data: BioDataFormProps) {
    setIsLoading(true);
    if (!dob) {
      toast.error("Tanggal Lahir wajib diisi");
      return;
    }
    data.userId = userId;
    data.dob = dob;
    data.trackingNumber = generateTrackingNumber();
    data.page = page;
    console.log(data);
    // setIsLoading(true);

    try {
      const res = await createTeacherProfile(data);

      if (res.status === 201) {
        setIsLoading(false);
        toast.success("Berhasil membuat profile");
        setTruckingNumber(res.data?.trackingNumber ?? "");
        setTeacherProfileId(res.data?.id ?? "");
        router.push(`/onboarding/${userId}?page=${nextPage}`);
        console.log(res.data);
      } else {
        setIsLoading(false);
        throw new Error("Something went wrong");
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
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
            label="Nama Depan"
            register={register}
            name="firstName"
            errors={errors}
            placeholder="Nama Depan"
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label="Nama Tengah (optional)"
            register={register}
            name="middleName"
            errors={errors}
            isRequired={false}
            placeholder="Nama Tengah"
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label="Nama Belakang"
            register={register}
            name="lastName"
            errors={errors}
            placeholder="Nama Belakang"
            className="col-span-full sm:col-span-1"
          />
          <DatePickerInput
            className="col-span-full sm:col-span-1"
            date={dob}
            setDate={setDOB}
            title="Date of Birth"
          />
          <RadioInput
            radioOptions={genderOptions}
            errors={errors}
            title="Gender"
            name="gender"
            register={register}
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
