import CustomButton from "@/components/CustomButton";
import CustomAccordion, { FAQItem } from "@/components/Frontend/CustomAccordion";
import Pricing from "@/components/Frontend/Pricing";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  const features = [
    "Sesame bring", 
    "Sesame bring", 
    "Sesame bring"
  ];
  const steps = [
    "Sesame bring", 
    "Sesame bring", 
    "Sesame bring"
  ];
  const cards = [
    {
      title: "Begin your journey",
      description: "Start a new application to join our network",
      link: "/",
      linkTitle: "Start a new application",
    },
    {
      title: "Begin your journey",
      description: "Start a new application to join our network",
      link: "/",
      linkTitle: "Start a new application",
    },
    {
      title: "Begin your journey",
      description: "Start a new application to join our network",
      link: "/",
      linkTitle: "Start a new application",
    },
    {
      title: "Begin your journey",
      description: "Start a new application to join our network",
      link: "/",
      linkTitle: "Start a new application",
    },
  ];
  const faqs: FAQItem[] = [
    {
      qn: "how can I reset my password",
      ans: "to reset you password, go to",
    },
    {
      qn: "how can I reset my password",
      ans: "to reset you password, go to",
    },
    {
      qn: "how can I reset my password",
      ans: "to reset you password, go to",
    },
    {
      qn: "how can I reset my password",
      ans: "to reset you password, go to",
    },
    {
      qn: "how can I reset my password",
      ans: "to reset you password, go to",
    },
  ]
  return (
    <div className="min-h-screen">
      <section className="py-12 px-4">
        <div className="max-w-6xl gap-4 mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <h2 className="sm:text-[3rem] text-[1.5rem] leading-[3.5rem]">
              Build a thriving{" "}
              <span className="text-blue-600 font-semibold">direct-pay</span>{" "}
              pratice with Mentor App
            </h2>
            <p className="py-4">
              Sesame is a full-service platform to help you build and run your
              pratice
            </p>
            <CustomButton
              title="List your Service"
              href="#"
              className="bg-blue-600 hover:bg-blue-800"
            />
            <div className="py-6">
              {features.map((feature, i) => {
                return (
                  <p key={i} className="flex items-center">
                    <Check className="w-4 h-4 mr-2 flex-shrink-0 text-blue-500" />
                    {feature}
                  </p>
                );
              })}
            </div>
          </div>
          <Image
            src="/guru.jpg"
            alt=""
            width={1170}
            height={848}
            className="w-full"
          />
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-6xl gap-8 mx-auto grid grid-cols-1 md:grid-cols-2">
          <Image
            src="/guru.jpg"
            alt=""
            width={1170}
            height={848}
            className="w-full hidden md:block mr-4"
          />
          <div className="">
            <h2 className="sm:text-3xl text-2xl">
              join sesame to increase your
              <span className="text-blue-600 font-semibold mx-2">
                revenue
              </span>{" "}
              today.
            </h2>
            
            <div className="grid grid-cols-2 gap-4 py-6">
              {cards.map((card, i) => {
                return (
                  <div
                    key={i}
                    className="bg-blue-900 p-4 rounded-lg shadow-2xl text-center"
                  >
                    <h3 className="text-2xl font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="text-gray-200 text-xs py-3">
                      {card.description}
                    </p>
                    <CustomButton
                      title={card.linkTitle}
                      href={card.link}
                      className="bg-blue-600 hover:bg-blue-800"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 px-4">
        <div className="max-w-6xl gap-4 mx-auto">
          <Pricing />
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-2xl gap-4 mx-auto">
          <CustomAccordion FAQS={faqs}/>
        </div>
      </section>
    </div>
  );
}
