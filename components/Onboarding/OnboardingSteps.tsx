"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import BioDataForm from "./BioDataForm";
import ContactInfo from "./ContactInfo";
import ProfessionInfo from "./EducationInfo";
import ProfileInfoForm from "./ProfileInfoForm";
import PraticeInfo from "./PraticeInfo";
import EducationInfo from "./EducationInfo";
import AdditionalInfo from "./AdditionalInfo";
import Availability from "./Availability";
import { useOnboardingContext } from "@/context/context";

export default function OnboardingSteps({ id }: { id: string }) {
  const params = useSearchParams();
  const page = params.get("page") ?? "bio-data";
  const { truckingNumber, teacherProfileId } = useOnboardingContext();
  console.log(page);
  const steps = [
    {
      title: "Bio Data",
      page: "bio-data",
      component: (
        <BioDataForm
          userId={id}
          title="Bio Data"
          description="Please fill in your Bio Data Info"
          page={page}
          nextPage="profile"
          formId={teacherProfileId}
        />
      ),
    },
    {
      title: "Profile Information",
      page: "profile",
      component: (
        <ProfileInfoForm
          title="Profile Information"
          description="Please fill in your Profile Info"
          page={page}
          nextPage="contact"
          formId={teacherProfileId}
          userId={id}
        />
      ),
    },
    {
      title: "Contact Information",
      page: "contact",
      component: (
        <ContactInfo
          title="Contact Information"
          description="Please fill in your Contact Info"
          page={page}
          nextPage="education"
          formId={teacherProfileId}
          userId={id}
        />
      ),
    },
    {
      title: "Education Information",
      page: "education",
      component: (
        <EducationInfo
          title="Education Information"
          description="Please fill in your Education Info"
          page={page}
          nextPage="pratice"
          formId={teacherProfileId}
          userId={id}
        />
      ),
    },
    {
      title: "Pratice Information",
      page: "pratice",
      component: (
        <PraticeInfo
          title="Pratice Information"
          description="Please fill in your Pratice Info"
          page={page}
          nextPage="additional"
          formId={teacherProfileId}
          userId={id}
        />
      ),
    },
    {
      title: "Additional Information",
      page: "additional",
      component: (
        <AdditionalInfo
          title="Additional Information"
          description="Please fill in your Additional Info"
          page={page}
          nextPage="availability"
          formId={teacherProfileId}
          userId={id}
        />
      ),
    },
    {
      title: "Availability",
      page: "availability",
      component: (
        <Availability
          title="Availability"
          description="Please fill in your Availability Info"
          page={page}
          formId={teacherProfileId}
          userId={id}
        />
      ),
    },
  ];
  const currentStep = steps.find((step) => step.page === page);
  console.log(currentStep);
  return (
    <div className="grid grid-cols-12 mx-auto rounded-lg shadow-inner overflow-hidden border border-slate-200 min-h-screen bg-slate-100">
      <div className="col-span-full sm:col-span-3 divide-y-2 divide-gray-200 bg-slate-300 h-full">
        {steps.map((step, i) => {
          return (
            <Link
              key={i}
              href={`/onboarding/${id}?page=${step.page}`}
              className={cn(
                "py-3 block px-4 bg-slate-300 text-slate-800 shadow-inner uppercase text-sm",
                step.page === page ? "bg-teal-800 text-slate-100" : ""
              )}
            >
              {step.title}
            </Link>
          );
        })}
      </div>
      <div className="col-span-full sm:col-span-9 p-4">
        {truckingNumber && (
          <p className="border-b border-gray-200 text-teal-600 pb-2">
            your Trucking Number is
            <span className="font-bold"> {truckingNumber}</span>{" "}
            <span className="text-xs">
              (Use this to Resume application or Check Status)
            </span>
          </p>
        )}
        {currentStep?.component}
      </div>
    </div>
  );
}
