"use client";
import { Linkedin } from "lucide-react";
import React from "react";

export default function Footer() {
  const handleClick = (name: string) => {
    console.log(`${name} link clicked`);
    // Add your custom click handling logic here
  };

  const footerNavs = [
    {
      label: "Company",
      items: [
        {
          href: "/join/teachers",
          name: "List your Service",
        },
        {
          name: "Blog",
        },
        {
          name: "Team",
        },
        {
          name: "Careers",
        },
      ],
    },
    {
      label: "Resources",
      items: [
        {
          name: "Contact",
        },
        {
          name: "Support",
        },
        {
          name: "Docs",
        },
        {
          name: "Pricing",
        },
      ],
    },
    {
      label: "About",
      items: [
        {
          name: "Terms",
        },
        {
          name: "License",
        },
        {
          name: "Privacy",
        },
        {
          name: "About Us",
        },
      ],
    },
  ];

  const socialLinks = [
    {
      title: "Linkedin",
      href: "https://www.linkedin.com/",
      icon: Linkedin,
      color: "text-blue-600",
    },
    {
      title: "Linkedin",
      href: "https://www.linkedin.com/",
      icon: Linkedin,
      color: "text-blue-600",
    },
    {
      title: "Linkedin",
      href: "https://www.linkedin.com/",
      icon: Linkedin,
      color: "text-blue-600",
    },
    {
      title: "Linkedin",
      href: "https://www.linkedin.com/",
      icon: Linkedin,
      color: "text-blue-600",
    },
  ];

  return (
    <footer className="text-gray-500 bg-white dark:bg-slate-950 px-4 py-5 max-w-screen-xl mx-auto md:px-8">
      <div className="gap-6 justify-between md:flex">
        <div className="flex-1">
          <div className="max-w-xs">
            <img src="https://www.floatui.com/logo.svg" className="w-32" alt="Logo" />
            <p className="leading-relaxed mt-2 text-[15px]">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>
        <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4" key={idx}>
              <h4 className="text-gray-800 dark:text-gray-300 font-medium">
                {item.label}
              </h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  {el.href ? (
                    <a
                      href={el.href}
                      className="hover:underline hover:text-indigo-600"
                    >
                      {el.name}
                    </a>
                  ) : (
                    <button
                      onClick={() => handleClick(el.name)}
                      className="hover:underline hover:text-indigo-600"
                    >
                      {el.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; {new Date().getFullYear()} Float UI All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            {socialLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <li
                  key={i}
                  className="w-10 h-10 border rounded-full flex items-center justify-center"
                >
                  <a href={item.href} className={item.color}>
                    <Icon className="w-6 h-6" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
