"use client";
import { Tabs } from "flowbite-react";
import { content } from "flowbite-react/tailwind";
import { X } from "lucide-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import ServiceList from "./Services/ServiceList";
import LinkCards from "./Teachers/LinkCards";

export default function TabbedItems() {
  const services = [
    {
      title: "Matematika",
      image: "/guru.jpg",
      slug: "matematika",
    },
    {
      title: "Fisika",
      image: "/guru.jpg",
      slug: "fisika",
    },
    {
      title: "Kimia",
      image: "/guru.jpg",
      slug: "kimia",
    },
    {
      title: "Biologi",
      image: "/guru.jpg",
      slug: "biologi",
    },
    {
      title: "Komputer",
      image: "/guru.jpg",
      slug: "komputer",
    },
  ];

  const tabs = [
    {
      title: "Bidang Studi",
      icon: X,
      component: <ServiceList data={services} />,
      content: [],
    },
    {
      title: "Jenjang",
      icon: X,
      component: <LinkCards />,
      content: [],
    },
  ];
  return (
    <Tabs aria-label="Tabs with underline" style="underline">
      {tabs.map((tab, i) => {
        return (
          <Tabs.Item key={i} active title={tab.title} icon={tab.icon}>
            {tab.component}
          </Tabs.Item>
        );
      })}
    </Tabs>
  );
}
