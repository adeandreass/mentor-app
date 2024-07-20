"use client";
import { type RegisterInputProps } from "@/types/types";
import Link from "next/link";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { useState } from "react";
import { createUser } from "@/actions/users";
import { UserRole } from "@prisma/client";
import toast from "react-hot-toast";

export default function RegisterForm({ role = "USER" }: { role?: UserRole }) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputProps>();
  async function onSubmit(data: RegisterInputProps) {
    // console.log(data);
    setIsLoading(true);

    data.role = role;
    try {
      const user = await createUser(data);
      if (user && user.status === 200) {
        console.log("User Created successfully");
        reset();
        setIsLoading(false);
        toast.success("User Created successfully");
        console.log(user.data)
      } else {
        console.log(user.error);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Buat akun baru
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <TextInput
            label="Nama"
            register={register}
            name="fullName"
            errors={errors}
            placeholder="Nama"
          />

          <TextInput
            label="Email"
            register={register}
            name="email"
            type="email"
            errors={errors}
            placeholder="Email"
          />

          <TextInput
            label="Nomor Telepon"
            register={register}
            name="phone"
            type="tel"
            errors={errors}
            placeholder="Nomor Telepon"
          />

          <TextInput
            label="Password"
            register={register}
            name="password"
            type="password"
            errors={errors}
            placeholder="Password"
          />

          <div>
            <SubmitButton
              title="Daftar"
              isLoading={isLoading}
              loadingTitle="Membuat akun silahkan tunggu..."
            />
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Sudah punya akun?{" "}
          <Link
            href="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Masuk
          </Link>
        </p>
      </div>
    </div>
  );
}
