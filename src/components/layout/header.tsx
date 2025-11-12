"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import experiments from "../../../experiments.json";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger className="px-3 py-1.5 text-sm border rounded-md bg-white/80 backdrop-blur-sm hover:bg-white transition-colors outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
          Experiments
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-[180px]">
          {experiments.map((experiment) => {
            const isActive = pathname === experiment.url;
            return (
              <DropdownMenuItem key={experiment.url} asChild>
                <Link
                  href={experiment.url}
                  className={isActive ? "font-medium" : ""}
                >
                  {experiment.name}
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
