"use client"
import { Tabs } from "flowbite-react";
import { content } from "flowbite-react/tailwind";
import { X } from "lucide-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import ServiceList from "./Services/ServiceList";
import LinkCards from "./Teachers/LinkCards";

export default function TabbedItems() {
    const services = [{
        title:"Telehealth",
        image:"/guru.jpg",
        slug:"telehealth",
    },{
        title:"Telehealth",
        image:"/guru.jpg",
        slug:"telehealth",
    },{
        title:"Telehealth",
        image:"/guru.jpg",
        slug:"telehealth",
    },{
        title:"Telehealth",
        image:"/guru.jpg",
        slug:"telehealth",
    },{
        title:"Telehealth",
        image:"/guru.jpg",
        slug:"telehealth",
    }];

    const tabs = [
        {
            title:"Popular Service",
            icon: X,
            component:<ServiceList data={services} />,
            content:[],
        },
        {
            title:"Popular Service",
            icon: X,
            component:<LinkCards />,
            content:[],
        },
        {
            title:"Poular Service",
            icon: X,
            component: <LinkCards className="bg-blue-900" />,
            content:[],
        },
        {
            title:"Popular",
            icon: X,
            component:<LinkCards className="bg-pink-300" />,
            content:[],
        },
    ]
  return (
    <Tabs aria-label="Tabs with underline" style="underline">
      {
        tabs.map((tab,i)=>{
            return(
                <Tabs.Item key={i} active title={tab.title} icon={tab.icon}>
                  {tab.component}
      </Tabs.Item>
            );
        })}
    </Tabs>
  );
}
