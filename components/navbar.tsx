"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/#tours-section",
    label: "Tours",
  }

]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-primary/20">
            <Image src="/images/logo.png" alt="Your Kingdom logo" width={40} height={40} />
          </div>
          <span className="text-xl font-bold tracking-tight">Your Kingdom</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === route.href ? "text-primary" : "text-muted-foreground",
              )}
              onClick={e => {
                if (route.href.startsWith("/#")) {
                  e.preventDefault();
                  const id = route.href.split("#")[1];
                  const el = document.getElementById(id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    // 如果不在当前页面，先跳转首页再滚动
                    window.location.href = route.href;
                  }
                }
              }}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact">
            <Button size="sm" className="h-9 px-4 rounded-full">
              Book Now
            </Button>
          </Link>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4 pt-6">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === route.href ? "text-primary" : "text-muted-foreground",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <Link href="/contact">
                  <Button size="sm" className="w-full">Book Now</Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
