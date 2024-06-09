import FixedBookButton from "@/components/FixedBookButton";
import TeacherDetails from "@/components/TeacherDetails";
import { Button } from "flowbite-react";
import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white max-w-4xl border border-gray-200 mx-auto shadow-md rounded-md">
        <div className="py-8 px-6">
          <div className="flex items-center justify-between ">
            <div className="">
              <div className="flex flex-col">
                <h2 className="uppercase font-bold text-2xl tracking-widest">
                  Ade Andreas
                </h2>
                <p className="text-gray-500 text-xs uppercase">Guru Kadita</p>
              </div>
              <div className="py-3">
                <p>in person</p>
                <p>pakam</p>
              </div>
            </div>
            <Image
              src="/teacher-profile.jpg"
              width={600}
              height={800}
              alt="Teacher"
              className="w-36 h-36 rounded-full object-cover"
            />
          </div>
          <TeacherDetails />
        </div>
      </div>
      <FixedBookButton />
    </div>
  );
}
