"use client";
import {
  BioDataFormProps,
  PraticeFormProps,
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
import ArrayItemsInput from "../FormInputs/ArrayInput";
import SelectInput from "../FormInputs/SelectInput";
import { StepFormProps } from "./BioDataForm";
// import { StepFormProps } from "./BioDataForm";

export default function PraticeInfo({
  page,
  title,
  description,
}: StepFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [dob, setDOB] = useState<Date>();
  const [expiry, setExpiry] = useState<Date>();
  const [profileImage, setProfileImage] = useState(
    "https://utfs.io/f/acf62ede-cc6c-4797-b0ee-3fae55d8d844-3vabb.png"
  );
  const insuranceOptions = [
    {
      label: "No",
      value: "no",
    },
    {
      label: "Yes",
      value: "yes",
    },
  ];
  const [services, setServices] = useState([]);
  const [languages, setLanguages] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PraticeFormProps>();
  const router = useRouter();
  async function onSubmit(data: PraticeFormProps) {
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
            label="School Name"
            register={register}
            name="schoolName"
            errors={errors}
            placeholder="Enter School Name"
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label="School Address"
            register={register}
            name="schoolAddress"
            errors={errors}
            placeholder="Enter School Address"
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label="School Contact Number"
            register={register}
            name="schoolContactNumber"
            errors={errors}
            placeholder="Enter School Contact Number"
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label="School Email Address"
            register={register}
            name="schoolEmailAddress"
            errors={errors}
            placeholder="Enter School Email Address"
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label="School Website (Optional)"
            register={register}
            name="schoolWebsite"
            errors={errors}
            placeholder="Enter School Website"
            className="col-span-full sm:col-span-1"
            isRequired={false}
          />
          <TextInput
            label="School Hours Of Operation"
            register={register}
            name="schoolHoursOfOperation"
            errors={errors}
            placeholder="Enter School Of Operation"
            className="col-span-full sm:col-span-1"
          />

          <SelectInput
            label="Do you accept Insurance?"
            name="insurance"
            register={register}
            className="col-span-full sm:col-span-1"
            options={insuranceOptions}
            multiple={false}
          />
          <ArrayItemsInput
            setItems={setServices}
            items={services}
            itemTitle="Educational Services"
          />
          <ArrayItemsInput
            setItems={setLanguages}
            items={languages}
            itemTitle="Languages Spoken"
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
