"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center space-x-8 p-4 border-b">
      {/* Home */}
      <Link href="/" className="text-lg font-medium hover:underline">
        Home
      </Link>

      {/* Productos con Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="text-lg font-medium">
            Productos
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="w-48">
          <DropdownMenuItem asChild>
            <Link href="/productos/lacteos/">Lacteos</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/productos/cereales">Cereales</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/productos/pickeos">Pickeos</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/productos/bebidas">Bebidas</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Contacto */}
      <Link href="/contacto" className="text-lg font-medium hover:underline">
        Contacto
      </Link>
    </nav>
  );
}
