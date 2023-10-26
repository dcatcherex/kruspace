import * as React from "react";
import Link from "next/link";

import { NavItem } from "@/types/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MenuSquareIcon } from "lucide-react";

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex justify-between gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
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
                            className={cn(
                              "flex items-center mx-auto text-sm text-muted-foreground border-b-4 border-transparent ",
                              item.disabled && "cursor-not-allowed opacity-80"
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
                    className={cn(
                      "flex items-center text-sm text-muted-foreground py-6 border-b-4 border-transparent hover:border-blue-500 transition-all",
                      item.disabled && "cursor-not-allowed opacity-80"
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
