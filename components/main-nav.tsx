"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { NavItem } from "@/types/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import logo from "@/public/kruspacelogo.svg";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MenuSquareIcon } from "lucide-react";
import Image from "next/image";
import { text } from "node:stream/consumers";

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname();
  return (
    <div className="flex justify-between gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-3">
        {/* <Image 
          className="stroke-black dark:stroke-white"
          
          src={logo}
          width={30}
          height={320}
          alt="logo"
        /> */}

        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      <div className="block md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="gap-2">
            <Button variant="outline">
              <MenuSquareIcon /> เมนู
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {items?.length ? (
              <div className="text-center">
                {items?.map(
                  (item, index) =>
                    item.href && (
                      <DropdownMenuItem key={index}>
                        <Link
                          href={item.href}
                          // className={cn(
                          //   "flex items-center mx-auto text-sm text-muted-foreground border-b-4 border-transparent ",
                          //   item.disabled && "cursor-not-allowed opacity-80"
                          // )}
                          className={clsx(
                            "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                            {
                              "bg-sky-100 text-blue-600":
                                pathname === item.href,
                            }
                          )}
                        >
                          {item.title}
                        </Link>
                      </DropdownMenuItem>
                    )
                )}
              </div>
            ) : null}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hidden md:block">
        {items?.length ? (
          <nav className="flex gap-6">
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    // className={cn(
                    //   "flex items-center text-sm text-muted-foreground py-6 border-b-4 border-transparent hover:border-blue-500 transition-all",
                    //   item.disabled && "cursor-not-allowed opacity-80"
                    // )}
                    className={clsx(
                      "flex items-center border-b-4 border-transparent py-6 text-sm text-muted-foreground transition-all hover:border-blue-500",
                      {
                        "border-blue-500": pathname === item.href,
                      }
                    )}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </nav>
        ) : null}
      </div>
    </div>
  );
}
