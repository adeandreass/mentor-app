"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const megaMenu =[
  {
    title:"Top Booked",
    service: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iure reiciendis fugit laboriosam et, ducimus laudantium, eligendi, accusamus amet natus rerum. Eaque quos nulla fugit ab veritatis, esse nostrum magni."
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iure reiciendis fugit laboriosam et, ducimus laudantium, eligendi, accusamus amet natus rerum. Eaque quos nulla fugit ab veritatis, esse nostrum magni."
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iure reiciendis fugit laboriosam et, ducimus laudantium, eligendi, accusamus amet natus rerum. Eaque quos nulla fugit ab veritatis, esse nostrum magni."
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iure reiciendis fugit laboriosam et, ducimus laudantium, eligendi, accusamus amet natus rerum. Eaque quos nulla fugit ab veritatis, esse nostrum magni."
      },
    ]
  },
  {
    title:"Top Booked",
    service: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iure reiciendis fugit laboriosam et, ducimus laudantium, eligendi, accusamus amet natus rerum. Eaque quos nulla fugit ab veritatis, esse nostrum magni."
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iure reiciendis fugit laboriosam et, ducimus laudantium, eligendi, accusamus amet natus rerum. Eaque quos nulla fugit ab veritatis, esse nostrum magni."
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iure reiciendis fugit laboriosam et, ducimus laudantium, eligendi, accusamus amet natus rerum. Eaque quos nulla fugit ab veritatis, esse nostrum magni."
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iure reiciendis fugit laboriosam et, ducimus laudantium, eligendi, accusamus amet natus rerum. Eaque quos nulla fugit ab veritatis, esse nostrum magni."
      },
    ]
  },
  {
    title:"Top Booked",
    service: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iure reiciendis fugit laboriosam et, ducimus laudantium, eligendi, accusamus amet natus rerum. Eaque quos nulla fugit ab veritatis, esse nostrum magni."
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iure reiciendis fugit laboriosam et, ducimus laudantium, eligendi, accusamus amet natus rerum. Eaque quos nulla fugit ab veritatis, esse nostrum magni."
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iure reiciendis fugit laboriosam et, ducimus laudantium, eligendi, accusamus amet natus rerum. Eaque quos nulla fugit ab veritatis, esse nostrum magni."
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iure reiciendis fugit laboriosam et, ducimus laudantium, eligendi, accusamus amet natus rerum. Eaque quos nulla fugit ab veritatis, esse nostrum magni."
      },
    ]
  },
  {
    title:"Top Booked",
    service: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iure reiciendis fugit laboriosam et, ducimus laudantium, eligendi, accusamus amet natus rerum. Eaque quos nulla fugit ab veritatis, esse nostrum magni."
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iure reiciendis fugit laboriosam et, ducimus laudantium, eligendi, accusamus amet natus rerum. Eaque quos nulla fugit ab veritatis, esse nostrum magni."
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iure reiciendis fugit laboriosam et, ducimus laudantium, eligendi, accusamus amet natus rerum. Eaque quos nulla fugit ab veritatis, esse nostrum magni."
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iure reiciendis fugit laboriosam et, ducimus laudantium, eligendi, accusamus amet natus rerum. Eaque quos nulla fugit ab veritatis, esse nostrum magni."
      },
    ]
  },
]

export default function MegaMenu() {
  return (
    <NavigationMenu className="bg-white">
      <NavigationMenuList className="space-x-4">
        {
          megaMenu.map((item,i)=>{
            return(
              <NavigationMenuItem key={i}>
          <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {item.service.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={'/service${component.slug}'}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
            )
          })
        }
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
