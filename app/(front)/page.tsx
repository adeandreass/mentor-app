import Hero from "@/components/Frontend/Hero";
import MegaMenu from "@/components/Frontend/MegaMenu";
import TabbedSection from "@/components/Frontend/TabbedSection";
import TeachersList from "@/components/TeachersList";
import React from "react";

export default function Home() {
  return (
   <section className="">
    <Hero/>
    <TabbedSection/>
    <TeachersList/>
    <TeachersList className="bg-white py-8 lg:py-24" title="In-person doctor visit" isInPerson={true} />
   </section>
  );
}
